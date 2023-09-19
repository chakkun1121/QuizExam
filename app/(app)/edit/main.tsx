"use client";
import { useEffect } from "react";
import { fileInfoType, quizType } from "../../../@types/filesInfoType";
import Quiz from "./quiz";
export default function EditMain({
  fileInfo,
  setFileInfo,
}: {
  fileInfo: fileInfoType;
  setFileInfo: (fileInfo: fileInfoType) => void;
}) {
  useEffect(() => {
    console.debug(fileInfo);
  }, [fileInfo]);
  return (
    <section className="mt-4">
      {fileInfo.content.quizexam.quiz.map((quiz: quizType) => {
        return (
          <Quiz
            key={quiz["@_quizID"]}
            type={quiz["@_type"]}
            quiz={quiz}
            setQuiz={(newQuiz: quizType) => {
              setFileInfo({
                ...fileInfo,
                content: {
                  ...fileInfo.content,
                  quizexam: {
                    ...fileInfo.content.quizexam,
                    quiz: fileInfo.content.quizexam.quiz.map((quiz_) =>
                      quiz_["@_quizID"] === quiz["@_quizID"] ? newQuiz : quiz_
                    ),
                  },
                },
              });
            }}
            deleteQuiz={() => {
              setFileInfo({
                ...fileInfo,
                content: {
                  ...fileInfo.content,
                  quizexam: {
                    ...fileInfo.content.quizexam,
                    quiz: fileInfo.content.quizexam.quiz.filter(
                      (quiz_) => quiz_["@_quizID"] !== quiz["@_quizID"]
                    ),
                  },
                },
              });
            }}
          />
        );
      })}
    </section>
  );
}
