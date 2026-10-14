import Dexie, { type Table } from 'dexie';
import type { AnswerRecord, ReviewRecord } from '../types';
class DevPrepDB extends Dexie {
  answers!: Table<AnswerRecord, string>;
  reviews!: Table<ReviewRecord, string>;
  completed!: Table<{id: string; at: number}, string>;
  constructor() {
    super('devprep-itds-v1');
    this.version(1).stores({ answers: 'id, lessonId, at', reviews: 'id, dueAt', completed: 'id, at' });
  }
}
export const db = new DevPrepDB();
export async function saveAnswer(questionId: string, lessonId: string, correct: boolean) {
  const now = Date.now();
  await db.answers.put({ id: `${now}-${questionId}-${Math.random().toString(36).slice(2,8)}`, lessonId, correct, at: now });
  const previous = await db.reviews.get(questionId);
  const interval = correct ? Math.max(1, previous?.interval ? Math.round(previous.interval * (previous.ease || 2)) : 1) : 0;
  await db.reviews.put({ id: questionId, interval, ease: Math.max(1.3, (previous?.ease || 2.2) + (correct ? 0.1 : -0.2)), attempts: (previous?.attempts || 0) + 1, dueAt: now + (correct ? interval * 86400000 : 10 * 60000) });
}
export async function resetProgress() { await db.transaction('rw', db.answers, db.reviews, db.completed, async () => { await Promise.all([db.answers.clear(), db.reviews.clear(), db.completed.clear()]); }); }
