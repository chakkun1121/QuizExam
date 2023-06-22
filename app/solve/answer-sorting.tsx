import { useState } from "react";
import { getAnswerXML } from "../edit/main";

export default function AnswerSorting({ index,quizID }: { index: number,quizID:string }) {
  const [answerXML, setAnswerXML] = useState<Element>(getAnswerXML(index));
  const answerArray =
    answerXML?.innerHTML.split(/\<sort\>|\<\/sort\>/).map((answer) => {
      return answer.match(/^(\s| |　)*$/) ? null : answer;
    }) || [];
  return (
    <>
      <p contentEditable>
        {answerArray.map((answer, i) => {
          return i % 2 === 0 ? answer : <Sort>{answer}</Sort>;
        })}
      </p>
    </>
  );
}
function Sort({ children }: { children: string }) {
  return <span className="bg-yellow-200">{children}</span>;
}
