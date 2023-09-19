import AnswerStandard from "./answer-standard";
import AnswerChoices from "./answer-choices";
import AnswerHole from "./answer-hole";
import AnswerSorting from "./answer-sorting";
import { answerType, quizSelect } from "../../../@types/filesInfoType";

export default function Answer({
  type,
  answer,
  setAnswer,
  quizID,
}: {
  type: quizSelect;
  answer: answerType;
  setAnswer: (newAnswer: answerType) => void;
  quizID: string;
}) {
  return (
    <>
      {(() => {
        switch (type) {
          case "standard":
            return <AnswerStandard answer={answer} setAnswer={setAnswer} />;
          case "choices":
            return (
              <AnswerChoices
                answer={answer}
                setAnswer={setAnswer}
                quizID={quizID}
              />
            );
          case "hold":
            return <AnswerHole answer={answer} setAnswer={setAnswer} />;
          case "sorting":
            return <AnswerSorting answer={answer} setAnswer={setAnswer} />;
          default:
            return <p>形式を選択してください。</p>;
        }
      })()}
    </>
  );
}
