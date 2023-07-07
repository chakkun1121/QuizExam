"use client";

import Answer from "./answer";
import { useRecoilState } from "recoil";
import { resentFileArrayAtom } from "../edit/main";
import QuizLayout from "../_components/quizLayout";

export default function Quiz({ index }: { index: number }) {
  const [resentFileArray] = useRecoilState<Array<Element>>(resentFileArrayAtom);
  const quizXML = resentFileArray[index];
  const problem = quizXML.getElementsByTagName("problem")[0]?.innerHTML;
  const answerType = quizXML.getAttribute("type") || null;
  return (
    <>
      <QuizLayout mode="solve">
        <div>
          <span className="select-none">
            {("000" + (index + 1)).slice(-3)}:
          </span>
          {problem}
        </div>
        <Answer type={answerType} index={index} />
      </QuizLayout>
    </>
  );
}
