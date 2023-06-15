import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import React from "react";
import AnswerStandard from "./answer-standard";
import AnswerChoices from "./answer-choices";
import AnswerHole from "./answer-hole";
import AnswerSorting from "./answer-sorting";

export default function Answer({
  answerXML,
  type,
}: {
  answerXML: Element;
  type: "standard" | "hold" | "choices" | "sorting";
}) {
  return (
    <>
      {(() => {
        switch (type) {
          case "standard":
            return <AnswerStandard answerXML={answerXML} />;
          case "choices":
            return <AnswerChoices answerXML={answerXML} />;
          case "hold":
            return <AnswerHole answerXML={answerXML} />;
          case "sorting":
            return <AnswerSorting answerXML={answerXML} />;
        }
      })()}
    </>
  );
}
