"use client";

import { useState } from "react";
import Answer from "./answer";
import { resentFileArrayAtom } from "./main";
import { useRecoilState } from "recoil";
import { Input, Select } from "@chakra-ui/react";

export default function Quiz({
  index,
  type,
}: {
  index: number;
  type: "standard" | "hold" | "choices" | "sorting" | null;
}) {
  const [resentFileArray, setRecentFileArray] =
    useRecoilState<Array<Element>>(resentFileArrayAtom);
  const [quizXML, setQuizXML] = useState<Element>(resentFileArray[index]);
  const [QuizType, setQuizType] = useState<
    "standard" | "hold" | "choices" | "sorting" | null
  >(type);
  const handleChange = (event) => {
    setQuizType(event.target.value);
  };
  function saveChange(e: React.ChangeEvent<HTMLInputElement>): undefined {
    console.log(e.target.value);
    setQuizXML(() => {
      quizXML.getElementsByTagName("problem")[0].innerHTML = e.target.value;
      return quizXML;
    });
    setRecentFileArray((resentFileArray) => {
      const newFileArray = [...resentFileArray];
      console.log(index);
      console.log(newFileArray[index]);
      newFileArray[index] = quizXML;
      console.log(newFileArray);
      return newFileArray;
    });
  }
  return (
    <div className="m-2 rounded bg-blue-300 p-2">
      <div className="flex">
        <div className="m-1 flex-1">
          <Input
            className="w-full"
            id="problem"
            placeholder="問題"
            defaultValue={quizXML.getElementsByTagName("problem")[0]?.innerHTML}
            onChange={saveChange}
          />
        </div>
      </div>
      <div className="md:flex">
        <div className="m-1 flex-1">
          <div className="flex-none">
            <Answer index={index} type={QuizType} />
          </div>
        </div>
        <div className="m-1 flex-none md:w-80">
          <Select
            id="choose-type-select"
            value={QuizType}
            placeholder="形式を選択"
            onChange={handleChange}
          >
            <option value={"standard"}>標準</option>
            <option value={"hold"}>穴埋め形式</option>
            <option value={"choices"}>選択問題</option>
            <option value={"sorting"}>並べ替え問題</option>
          </Select>
        </div>
      </div>
    </div>
  );
}
