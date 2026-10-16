export type Question = { id: string; prompt: string; code?: string; options: string[]; correct: number; explanation: string };
export type Lesson = { id: string; module: string; title: string; minutes: number; priority: 'Core' | 'Important'; simple: string; details: string; analogy: string; code: string; interview: string; pitfall: string; useCase?: string; avoid?: string; questions: Question[] };
export type AnswerRecord = { id: string; lessonId: string; correct: boolean; at: number };
export type ReviewRecord = { id: string; dueAt: number; interval: number; ease: number; attempts: number };
