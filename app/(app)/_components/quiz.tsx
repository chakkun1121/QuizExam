import { IconButton } from "@chakra-ui/react";
import ProblemInput from "./problemInput";
import QuizLayout from "./quizLayout";
import TypeSelect from "./typeSelect";
import { RiDeleteBinFill } from "react-icons/ri";
import AnswerStandard from "./answer-standard";
import AnswerChoices from "./answer-choices";
import { answerObjectType } from "../../../types/answerObjectType";
import AnswerSorting from "./answer-sorting";
import AnswerHole from "./answer-hole";
import { AnswerSortingType } from "../../../types/AnswerSortingType";
import { answerHoleType } from "../../../types/answerHoleType";
import { quizObjectType } from "../../../types/quizObjectType";

export default function Quiz({
  quizObject,
  mode,
  setQuizObject,
  deleteQuiz,
  isShowAnswer,
  setResentAnswer,
}: {
  quizObject: quizObjectType;
  mode: "edit" | "solve" | "view";
  setQuizObject?: (newQuizObject: object) => void;
  deleteQuiz?: () => void;
  isShowAnswer?: boolean;
  setResentAnswer?: (newResentAnswer) => void;
}) {
  const id: string = quizObject["@_quizID"];
  return (
    <>
      <QuizLayout mode={mode}>
        <>
          {mode == "edit" ? (
            <ProblemInput
              value={quizObject.problem}
              onChange={(e) => {
                setQuizObject({ ...quizObject, problem: e.target.value });
              }}
            />
          ) : (
            <p>{quizObject.problem}</p>
          )}
        </>
        <>
          {(() => {
            switch (quizObject["@_type"]) {
              case "standard":
                return (
                  <>
                    <AnswerStandard
                      answer={quizObject.answer as string}
                      setAnswer={(newAnswer) => {
                        setQuizObject({ ...quizObject, answer: newAnswer });
                      }}
                      mode={mode}
                      isShowAnswer={isShowAnswer}
                    />
                  </>
                );
              case "choices":
                return (
                  <>
                    <AnswerChoices
                      answerObject={quizObject.answer as answerObjectType}
                      setAnswer={(newAnswerObject) => {
                        setQuizObject({
                          ...quizObject,
                          answer: newAnswerObject,
                        });
                      }}
                      mode={mode}
                      isShowAnswer={isShowAnswer}
                    />
                  </>
                );
              case "hole":
                return (
                  <>
                    <AnswerHole
                      answerObject={quizObject.answer as answerHoleType}
                      setAnswer={(newAnswerObject) => {
                        setQuizObject({
                          ...quizObject,
                          answer: newAnswerObject,
                        });
                      }}
                      mode={mode}
                      isShowAnswer={isShowAnswer}
                    />
                  </>
                );
              case "sorting":
                return (
                  <>
                    <AnswerSorting
                      answerObject={quizObject.answer as AnswerSortingType}
                      setAnswer={(newAnswerObject) => {
                        setQuizObject({
                          ...quizObject,
                          answer: newAnswerObject,
                        });
                      }}
                      isShowAnswer={isShowAnswer}
                      mode={mode}
                    />
                  </>
                );
              default:
                return (
                  <>
                    <p>
                      {mode == "edit"
                        ? "形式を選択してください"
                        : "形式が選択されていません"}
                    </p>
                  </>
                );
            }
          })()}
        </>
        <>
          {mode == "edit" ? (
            <>
              <TypeSelect
                value={quizObject["@_type"]}
                onChange={(e) => {
                  setQuizObject({ ...quizObject, ["@_type"]: e.target.value });
                }}
                options={typeOptions}
              />
            </>
          ) : (
            <></>
          )}
        </>
        <>
          {mode == "edit" ? (
            <>
              <IconButton aria-label="問題を削除" onClick={deleteQuiz}>
                <RiDeleteBinFill />
              </IconButton>
            </>
          ) : (
            <></>
          )}
        </>
      </QuizLayout>
    </>
  );
}
const typeOptions = [
  { value: "standard", label: "標準" },
  { value: "hole", label: "穴埋め形式" },
  { value: "choices", label: "選択問題" },
  { value: "sorting", label: "並べ替え問題" },
];
