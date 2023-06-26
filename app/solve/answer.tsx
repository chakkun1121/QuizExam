import AnswerStandard from "./answer-standard";
import AnswerChoices from "./answer-choices";
import AnswerHole from "./answer-hole";
import AnswerSorting from "./answer-sorting";
import { useRecoilState } from "recoil";
import { resentFileArrayAtom } from "../edit/main";
import { useEffect } from "react";
import { currentAnswerAtom, isShowAnswerAtom } from "./main";

export default function Answer({
  index,
  type,
}: {
  index: number;
  type: string;
}) {
  const [resentFileArray] = useRecoilState<Array<Element>>(resentFileArrayAtom);
  const quizXML = resentFileArray[index];
  const quizID: string = quizXML.getAttribute("quizID") || null;
  const [currentAnswer] = useRecoilState<Object>(currentAnswerAtom);
  const [isShowAnswer] = useRecoilState(isShowAnswerAtom);
  useEffect(() => {
    if (isShowAnswer) {
      //解答を検証し、achievementに正誤を保存する(今はやらない)
    }
  }, [isShowAnswer]);
  return (
    <>
      <div>
        {(() => {
          switch (type) {
            case "standard":
              return <AnswerStandard index={index} quizID={quizID} />;
            case "choices":
              return <AnswerChoices index={index} quizID={quizID} />;
            case "hold":
              return <AnswerHole index={index} quizID={quizID} />;
            case "sorting":
              return <AnswerSorting index={index} quizID={quizID} />;
            default:
              return <p>ファイル本体の回答形式が選択されていません。</p>;
          }
        })()}
      </div>
    </>
  );
}
