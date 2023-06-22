import { useRecoilState } from "recoil";
import { isShowAnswerAtom } from "./main";

  
import AnswerStandard from "./answer-standard";
import AnswerChoices from "./answer-choices";
import AnswerHole from "./answer-hole";
import AnswerSorting from "./answer-sorting";

export default function Answer({
  index,
  type,
}: {
  index: number;
  type:string;
  }) {
  const [isShowAnswer, setIsShowANswer] = useRecoilState(isShowAnswerAtom);
  console.log(type)
  return (
    <>
    <div>
      {(() => {
        switch (type) {
          case "standard":
            return <AnswerStandard index={index} />;
          case "choices":
            return <AnswerChoices index={index} />;
          case "hold":
            return <AnswerHole index={index} />;
          case "sorting":
            return <AnswerSorting index={index} />;
          default:
            return <p>形式を選択してください。</p>;
        }
        })()}
        </div>    </>
  );
}
