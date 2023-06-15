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
                        key={i}
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
                          key={i}
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
            //answerXMLファイルをばらす
            // <answer>解答<hole>穴埋め箇所</hole>解答</answer> -> ["解答", "穴埋め箇所", "解答"]
            // <answer><hole>穴埋め1</hole><hole>穴埋め2</hole></answer> -> ["","穴埋め1","", "穴埋め2",""]
            const answerArray = answerXML.innerHTML
              .split(/\<hole\>|\<\/hole\>/)
              .map((answer) => {
                return answer.match(/^(\s| |　)*$/) ? null : answer;
              });
            console.log(answerArray);
            return (
              <>
                <p contentEditable>
                  {answerArray.map((answer, i) => {
                    return i % 2 === 0 ? answer : <Hole>{answer}</Hole>;
                  })}
                </p>
              </>
            );
        }
      })()}
    </>
  );
}
function Hole({ children }: { children: string }) {
  return <span className="bg-yellow-200">{children}</span>;
}
