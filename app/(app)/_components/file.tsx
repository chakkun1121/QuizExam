import { fileObjectType } from "../../../types/fileObjectType";
import Quiz from "./quiz";

export default function File({
  fileObject,
  setFileObject,
  mode,
}: {
  fileObject: fileObjectType;
  setFileObject?: (newFileObject: object) => void;
  mode: "edit" | "solve" | "view";
}) {
  function deleteQuiz(i: number) {
    setFileObject({
      ...fileObject,
      quiz: fileObject.quizexam.quiz.filter((_, index) => index !== i),
    });
  }
  console.log(fileObject.quizexam.quiz);
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
            deleteQuiz={() => {
              deleteQuiz(i);
            }}
            key={quiz["@_quizID"]}
          />
        );
      })}
    </>
  );
}
