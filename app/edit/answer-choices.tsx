import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { resentFileArrayAtom } from "./main";

export default function AnswerChoices({ index }: { index: number }) {
  const [resentFileArray, setRecentFileArray] = useRecoilState(resentFileArrayAtom);
  console.log(resentFileArray)
  const [answerXML, setAnswerXML] = useState<Element>(resentFileArray[index].getElementsByTagName("answer")[0]);
  const choices = Array.from(answerXML.getElementsByTagName("choice"));
  const answerIndex = choices.findIndex(
    (choice) => choice.getAttribute("answer") === "true"
  );
  return (
    <div className="flex">
      <RadioGroup defaultValue={answerIndex || 0}>
        {choices.map((_, i) => {
          return (
            <FormControlLabel
              key={"radio" + i}
              value={i}
              control={<Radio />}
              label=""
            />
          );
        })}
      </RadioGroup>
      <div className="w-full flex-1">
        {choices.map((choice, i) => {
          return (
            <>
              <TextField
                key={"edit" + i}
                className="w-full"
                id={"answer" + i}
                label={"選択肢" + (i + 1)}
                variant="standard"
                defaultValue={choice.innerHTML}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
