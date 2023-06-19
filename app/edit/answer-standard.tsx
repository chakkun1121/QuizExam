import { TextField } from "@mui/material";
import { useState } from "react";
import { getAnswerXML } from "./main";

export default function AnswerStandard({ index }: { index: number }) {
  const [answerXML, setAnswerXML] = useState<Element>(getAnswerXML(index));
  return (
    <TextField
      className="w-full"
      id="answer"
      label="答え"
      variant="standard"
      defaultValue={answerXML.innerHTML}
    />
  );
}
