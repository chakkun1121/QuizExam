import { answerType } from "../../../@types/filesInfoType";

export default function AnswerHole({
  answer,
  setAnswer,
}: {
  answer: answerType;
  setAnswer: (newAnswer: answerType) => void;
}) {
  return (
    <>
      <p>申し訳ございませんが、並び替え形式は未実装です。</p>
    </>
  );
}
