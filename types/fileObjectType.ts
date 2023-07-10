export interface fileObjectType {
  quizexam: {
    "@_createdDate": Date;
    "@_lastUpdatedDate": Date;
    "@_fileID": string;
    quiz: [
      {
        "@_quizID": string;
        "@type": "standard" | "hold" | "choices" | "sorting" | null;
        problem: string;
        answer: {} | string;
      }
    ];
  };
}
