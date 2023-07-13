export interface quizObjectType {
  "@_quizID": string;
  "@_type": "standard" | "hole" | "choices" | "sorting" | null;
  problem: string;
  answer: {} | string;
}
