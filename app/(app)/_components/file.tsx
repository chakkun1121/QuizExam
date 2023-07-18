import React from "react";
import { fileObjectType } from "../../../types/fileObjectType";
import Quiz from "./quiz";

const File = React.memo(
  ({
    fileObject,
    setFileObject,
    setResentAnswers,
    mode,
    isShowAnswer,
  }: {
    fileObject: fileObjectType;
    setFileObject?: (newFileObject: object) => void;
    setResentAnswers?;
    mode: "edit" | "solve" | "view";
    isShowAnswer?: boolean;
  }) => {
    function deleteQuiz(i: number) {
      setFileObject({
        ...fileObject,
        quiz: fileObject.quizexam.quiz.filter((_, index) => index !== i),
      });
    }
    return (
      <>
        {fileObject.quizexam?.quiz?.map((quiz, i) => {
          return (
            <Quiz
              quizObject={quiz}
              mode={mode}
              setQuizObject={(newQuiz) => {
                const quiz: Array<Object> = fileObject.quizexam.quiz;
                quiz[i] = newQuiz;
                setFileObject({ ...fileObject, quiz: quiz });
              }}
              setResentAnswers={(newResentAnswer) => {
                setResentAnswers((resentAnswers) => {});
              }}
              deleteQuiz={() => {
                deleteQuiz(i);
              }}
              key={quiz["@_quizID"]}
              isShowAnswer={isShowAnswer}
            />
          );
        })}
      </>
    );
  }
);
export default File;
