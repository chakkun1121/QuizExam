import { TextField } from "@mui/material";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { resentFileArrayAtom } from "./main";

export default function AnswerStandard({ index }: { index: number }) {
    const [resentFileArray, setRecentFileArray] = useRecoilState(resentFileArrayAtom);
  const [answerXML, setAnswerXML] = useState<Element>(resentFileArray[index].getElementsByTagName("answer")[0]);
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
