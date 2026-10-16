import type {Question, ReviewRecord} from '../types';

export function shuffled<T>(items: T[], rng = Math.random): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function prepareQuiz<T extends Question>(questions: T[], rng = Math.random): T[] {
  return questions.map(question => {
    const order = shuffled(question.options.map((_, index) => index), rng);
    return {...question, options: order.map(index => question.options[index]), correct: order.indexOf(question.correct)};
  });
}

export function reviewPools<T extends Question>(questions: T[], reviews: ReviewRecord[], now: number) {
  const dueIds = new Set(reviews.filter(review => review.dueAt <= now).map(review => review.id));
  // Failed answers reset the interval to zero; a successful retry clears the mistake.
  const mistakeIds = new Set(reviews.filter(review => review.interval === 0).map(review => review.id));
  return {
    due: questions.filter(question => dueIds.has(question.id)),
    mistakes: questions.filter(question => mistakeIds.has(question.id))
  };
}
