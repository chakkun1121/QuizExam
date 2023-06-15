"use client";

import { MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { FormControl, InputLabel } from "@mui/material";
import Answer from "./answer";

export default function Quiz({
  quizXML,
  type,
}: {
  quizXML: Element;
  type: "standard" | "hold" | "choices" | "sorting";
}) {
  const problem: string = quizXML.getElementsByTagName("problem")[0]?.innerHTML;
  const answer: Element = quizXML.getElementsByTagName("answer")[0];
  const [Quiztype, setQuizType] = useState<
    "standard" | "hold" | "choices" | "sorting"
  >(type);
  const handleChange = (event) => {
    setQuizType(event.target.value);
  };
  return (
    <div className="m-2 rounded bg-blue-300 p-2">
      <div className="flex">
        <div className="flex-1">
          <TextField
            className="w-full"
            id="problem"
            label="問題"
            variant="standard"
            defaultValue={problem}
          />
        </div>
      </div>
      <div className="md:flex">
        <div className="flex-1">
          <Answer answerXML={answer} type={Quiztype} />
        </div>
        <div className="flex-none md:m-2 md:w-80">
          <FormControl fullWidth>
            <InputLabel id="choose-type">形式を選択</InputLabel>
            <Select
              labelId="choose-type"
              id="choose-type-select"
              value={Quiztype}
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
