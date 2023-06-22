"use client";

import Answer from "./answer";
import { useRecoilState } from "recoil";
import { resentFileArrayAtom } from "../edit/main";

export default function Quiz({
  index,
}: {
  index: number
  }) {
  const [resentFileArray] =
    useRecoilState<Array<Element>>(resentFileArrayAtom);
  const quizXML = resentFileArray[index];
  const problem = quizXML.getElementsByTagName("problem")[0]?.innerHTML;
  const answerType=quizXML.getAttribute("type")||null
  return (
    <div className="m-2 rounded bg-blue-300 p-2">
      <div>
        <h2>{ ( '000' + (index+1) ).slice( -3 )}:{problem}</h2>
      </div>
      <div>
        <Answer type={answerType} index={index}/>
      </div>
    </div>
  );
}
