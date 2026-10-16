import test from 'node:test';
import assert from 'node:assert/strict';
import {prepareQuiz, reviewPools} from '../src/services/practice.ts';
import {lessons} from '../src/data/lessons.ts';

const questions = lessons.flatMap(lesson => lesson.questions);

test('every question has unique identity, valid choices, and useful feedback', () => {
  assert.equal(new Set(questions.map(question => question.id)).size, questions.length);
  for (const question of questions) {
    assert.equal(question.options.length, 4, question.id);
    assert.equal(new Set(question.options).size, 4, question.id);
    assert.ok(Number.isInteger(question.correct) && question.correct >= 0 && question.correct < 4, question.id);
    assert.ok(question.prompt && question.explanation, question.id);
    assert.ok(!question.options.some(option => /only useful in frontend|eliminates all software bugs|removes the need for testing|Use it everywhere/.test(option)), question.id);
  }
});

test('shuffling choices preserves each correct answer and leaves source data intact', () => {
  const original = structuredClone(questions);
  for (const rng of [() => 0, () => 0.5, () => 0.9999]) {
    const quiz = prepareQuiz(questions, rng);
    for (const [index, question] of quiz.entries()) {
      assert.equal(question.options[question.correct], original[index].options[original[index].correct]);
      assert.deepEqual([...question.options].sort(), [...original[index].options].sort());
      assert.equal(question.id, original[index].id);
    }
  }
  assert.deepEqual(questions, original);
});

test('review distinguishes due questions from unresolved mistakes and ignores deleted questions', () => {
  const now = 1_000;
  const [failed, mastered, later, fresh] = questions;
  const review = (id, dueAt, interval) => ({id, dueAt, interval, ease: 2, attempts: 1});
  const reviews = [review(failed.id, now + 600_000, 0), review(mastered.id, now, 1), review(later.id, now + 86400_000, 2), review('removed-id', 0, 0)];
  const pools = reviewPools(questions, reviews, now);
  assert.deepEqual(pools.due.map(q => q.id), [mastered.id]);
  assert.deepEqual(pools.mistakes.map(q => q.id), [failed.id]);
  assert.ok(!pools.mistakes.some(q => q.id === fresh.id));
  assert.ok(reviewPools(questions, reviews, now + 600_000).due.some(q => q.id === failed.id));
  const afterCorrectRetry = reviews.map(r => r.id === failed.id ? {...r, interval: 1, dueAt: now + 86400_000} : r);
  assert.equal(reviewPools(questions, afterCorrectRetry, now).mistakes.length, 0);
});

test('the correct option is not consistently the longest', () => {
  const uniquelyLongest = questions.filter(q => q.options.every((option, i) => i === q.correct || option.length < q.options[q.correct].length));
  assert.ok(uniquelyLongest.length / questions.length < 0.5, `${uniquelyLongest.length}/${questions.length} correct options are uniquely longest`);
});
