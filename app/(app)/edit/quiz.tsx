"use client";

import { useEffect, useState } from "react";
import Answer from "./answer";
import { resentFileArrayAtom } from "./main";
import { useRecoilState } from "recoil";
import { IconButton } from "@chakra-ui/react";
import { RiDeleteBinFill } from "react-icons/ri";
import ProblemInput from "../_components/problemInput";
import TypeSelect from "../_components/typeSelect";
import QuizLayout from "../../_components/quizLayout";
const typeOptions = [
  { value: "standard", label: "標準" },
  { value: "hold", label: "穴埋め形式" },
  { value: "choices", label: "選択問題" },
  { value: "sorting", label: "並べ替え問題" },
];
type quizType = "standard" | "hold" | "choices" | "sorting" | null;
export default function Quiz({
  index,
  type,
}: {
  index: number;
  type: quizType;
}) {
  const [resentFileArray, setRecentFileArray] =
    useRecoilState<Array<Element>>(resentFileArrayAtom);
  const [quizXML, setQuizXML] = useState<Element>(resentFileArray[index]);
  const [QuizType, setQuizType] = useState<quizType>(type);
  const handleChange = (event) => {
    setQuizType(event.target.value);
  };
  function saveChange(e: React.ChangeEvent<HTMLInputElement>): undefined {
    setQuizXML(() => {
      quizXML.getElementsByTagName("problem")[0].innerHTML = e.target.value;
      return quizXML;
    });
    setRecentFileArray((resentFileArray) => {
      const newFileArray = [...resentFileArray];
      newFileArray[index] = quizXML;
      return newFileArray;
    });
  }
  function deleteQuiz() {
    setRecentFileArray((resentFileArray) => {
      const newFileArray = [...resentFileArray];
      newFileArray.splice(index, 1);
      return newFileArray;
    });
  }
  useEffect(() => {
    setRecentFileArray((resentFileArray) => {
      const newFileArray = [...resentFileArray];
      newFileArray[index].setAttribute("type", QuizType);
      return newFileArray;
    });
  }, [QuizType]);
  return (
    <>
      <QuizLayout mode="edit">
        <ProblemInput
          className="w-full"
          value={quizXML.getElementsByTagName("problem")[0]?.innerHTML}
          onChange={saveChange}
        />
        <Answer index={index} type={QuizType} />
        <TypeSelect
          value={QuizType}
          onChange={handleChange}
          options={typeOptions}
        />
        <IconButton aria-label="問題を削除" onClick={deleteQuiz}>
          <RiDeleteBinFill />
        </IconButton>
      </QuizLayout>
    </>
  );
}
