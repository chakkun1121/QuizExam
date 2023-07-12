import { IconButton } from "@chakra-ui/react";
import ProblemInput from "./problemInput";
import QuizLayout from "./quizLayout";
import TypeSelect from "./typeSelect";
import { RiDeleteBinFill } from "react-icons/ri";
import AnswerStandard from "./answer-standard";
import AnswerChoices from "./answer-choices";
import { answerObjectType } from "../../../types/answerObjectType";

export default function Quiz({
  quizObject,
  mode,
  setQuizObject,
  deleteQuiz,
}: {
  quizObject: {
    "@_quizID": string;
    "@type": "standard" | "hold" | "choices" | "sorting" | null;
    problem: string;
    answer: {} | string;
  };
  mode: "edit" | "solve" | "view";
  setQuizObject?: (newQuizObject: object) => void;
  deleteQuiz?: () => void;
}) {
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
                    />
                  </>
                );
              case "hole":
                return <></>;
              case "sorting":
                return <></>;
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
              {" "}
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
  { value: "hold", label: "穴埋め形式" },
  { value: "choices", label: "選択問題" },
  { value: "sorting", label: "並べ替え問題" },
];
