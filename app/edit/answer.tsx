import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import React, { useState } from "react";
import AnswerStandard from "./answer-standard";
import AnswerChoices from "./answer-choices";
import AnswerHole from "./answer-hole";
import AnswerSorting from "./answer-sorting";
import { useRecoilState } from "recoil";
import { resentFileArrayAtom } from "./main";

export default function Answer({
  index,
  type,
}: {
  index: number;
  type: "standard" | "hold" | "choices" | "sorting";
  }) {
  const [resentFileArray, setRecentFileArray] = useRecoilState(resentFileArrayAtom);
  const [answerXML, setAnswerXML] = useState<Element>(resentFileArray[index].getElementsByTagName("answer")[0]);
  return (
    <>
      {(() => {
        switch (type) {
          case "standard":
            return <AnswerStandard index={index} />;
          case "choices":
            return <AnswerChoices index={index} />;
          case "hold":
            return <AnswerHole index={index} />;
          case "sorting":
            return <AnswerSorting index={index} />;
        }
      })()}
    </>
  );
}
