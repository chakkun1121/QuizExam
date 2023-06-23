import { getAnswerXML } from "./main";
import { useState } from "react";

export default function AnswerSorting({ index }: { index: number }) {
  const [answerXML, setAnswerXML] = useState<Element>(getAnswerXML(index));
  const answerArray =
    answerXML?.innerHTML.split(/\<sort\>|\<\/sort\>/).map((answer) => {
      return answer.match(/^(\s| |　)*$/) ? null : answer;
    }) || [];
  return (
    <>
      {/* <p contentEditable>
        {answerArray.map((answer, i) => {
          return i % 2 === 0 ? answer : <Sort>{answer}</Sort>;
        })}
      </p> */}
      <p>申し訳ございませんが並び替え形式は未実装です。</p>
    </>
  );
}
function Sort({ children }: { children: string }) {
  return <span className="bg-yellow-200">{children}</span>;
}
