import { AnswerSortingType } from "../../../types/AnswerSortingType";

export default function AnswerSorting({
  answerObject,
  setAnswer,
  mode,
}: {
  answerObject: AnswerSortingType;
  setAnswer?: (newAnswerObject: object) => void;
  mode: "edit" | "solve" | "view";
}) {
  return <>{mode == "edit" ? <></> : mode == "solve" ? <></> : <></>}</>;
}
