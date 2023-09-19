"use client";
import { useState } from "react";
import { getAnswerXML, resentFileArrayAtom } from "./main";
import { useRecoilState } from "recoil";

export default function AnswerStandard({ index }: { index: number }) {
  const [answerXML] = useState<Element>(getAnswerXML(index));
  const [recentFileArray, setRecentFileArray] =
    useRecoilState<Array<Element>>(resentFileArrayAtom);
  return (
    <input
      type="text"
      className="w-full"
      id="answer"
      placeholder="答え"
      defaultValue={answerXML?.innerHTML}
      autoComplete="off"
      onChange={(e) => {
        setRecentFileArray(() => {
          const answerXML: Element = new DOMParser().parseFromString(
            `<answer>${e.target.value}</answer>`,
            "text/xml"
          ).documentElement;
          const cashRecentFileArray = [...recentFileArray];
          return cashRecentFileArray.map((quizXML: Element, i: number) => {
            if (index == i) {
              const cashQuizXML = quizXML.cloneNode(true) as Element;
              cashQuizXML.getElementsByTagName("answer")[0].innerHTML =
                answerXML.innerHTML;
              return cashQuizXML;
            } else {
              return quizXML;
            }
          });
        });
      }}
    />
  );
}
