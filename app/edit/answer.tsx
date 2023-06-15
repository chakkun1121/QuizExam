import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import React from "react";

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
            return (
              <TextField
                className="w-full"
                id="answer"
                label="答え"
                variant="standard"
                defaultValue={answerXML.innerHTML}
              />
            );
          case "choices":
            const choices = Array.from(
              answerXML.getElementsByTagName("choice")
            );
            console.log(choices);
            const answerIndex = choices.findIndex(
              (choice) => choice.getAttribute("answer") === "true"
            );
            return (
              <div className="flex">
                <RadioGroup defaultValue={answerIndex || 0}>
                  {choices.map((_, i) => {
                    return (
                      <FormControlLabel
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
          case "hold":
            const reactElement = React.createElement(
              "p",
              { contentEditable: true },
              answerXML.innerHTML
            );
            return reactElement;
        }
      })()}
    </>
  );
}
