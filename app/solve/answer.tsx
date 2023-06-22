  import AnswerStandard from "./answer-standard";
import AnswerChoices from "./answer-choices";
import AnswerHole from "./answer-hole";
import AnswerSorting from "./answer-sorting";
import { useRecoilState } from "recoil";
import { resentFileArrayAtom } from "../edit/main";

export default function Answer({
  index,
  type,
}: {
  index: number;
  type:string;
  }) {
  
  const [resentFileArray] =
    useRecoilState<Array<Element>>(resentFileArrayAtom);
  const quizXML = resentFileArray[index];
  const quizID: string = quizXML.getAttribute("quizID") || null
  return (
    
    <>
    <div>
      {(() => {
        switch (type) {
          case "standard":
            return <AnswerStandard index={index} quizID={quizID}/>;
          case "choices":
            return <AnswerChoices index={index} quizID={quizID}/>;
          case "hold":
            return <AnswerHole index={index} quizID={quizID}/>;
          case "sorting":
            return <AnswerSorting index={index} quizID={quizID}/>;
          default:
            return <p>形式を選択してください。</p>;
        }
        })()}
        </div>    </>
  );
}
