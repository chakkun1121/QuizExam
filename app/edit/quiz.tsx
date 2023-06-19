"use client";

import { MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { FormControl, InputLabel } from "@mui/material";
import Answer from "./answer";
import { resentFileArrayAtom } from "./main";
import { useRecoilState } from "recoil";

export default function Quiz({
  index,
  type,
}: {
  index: number;
  type: "standard" | "hold" | "choices" | "sorting";
}) {
  const [resentFileArray, setRecentFileArray] =
    useRecoilState<Array<Element>>(resentFileArrayAtom);
  const [quizXML, setQuizXML] = useState<Element>(resentFileArray[index]);
  const [QuizType, setQuizType] = useState<
    "standard" | "hold" | "choices" | "sorting"
  >(type);
  // useEffect(() => {
  //   console.log("resentFileArray update")
  //   setRecentFileArray((resentFileArray) => {
  //     const newFileArray = [...resentFileArray];
  //     console.log(index);
  //     console.log(newFileArray[index]);
  //     newFileArray[index] = quizXML;
  //     console.log(newFileArray);
  //     return newFileArray;
  //   });
  // }, [quizXML]);
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
        <div className="flex-1">
          <TextField
            className="w-full"
            id="problem"
            label="問題"
            variant="standard"
            defaultValue={quizXML.getElementsByTagName("problem")[0]?.innerHTML}
            onChange={saveChange}
          />
        </div>
      </div>
      <div className="md:flex">
        <div className="flex-1">
          <Answer index={index} type={QuizType} />
        </div>
        <div className="flex-none md:m-2 md:w-80">
          <FormControl fullWidth>
            <InputLabel id="choose-type">形式を選択</InputLabel>
            <Select
              labelId="choose-type"
              id="choose-type-select"
              value={QuizType}
              label="形式"
              onChange={handleChange}
            >
              <MenuItem value={"standard"}>標準</MenuItem>
              <MenuItem value={"hold"}>穴埋め形式</MenuItem>
              <MenuItem value={"choices"}>選択問題</MenuItem>
              <MenuItem value={"sorting"}>並べ替え問題</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}