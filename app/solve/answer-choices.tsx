"use client";
import { useState } from "react";
import { IconButton, Input, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { getAnswerXML } from "../edit/main";

export default function AnswerChoices({ index }: { index: number }) {
  const [answerXML] = useState<Element>(getAnswerXML(index));
  const [choices, setChoices] = useState<Array<Element>>(
    Array.from(answerXML?.getElementsByTagName("choice") || [])
  );
  const [answerIndex, setAnswerIndex] = useState<string>(
    choices
      .findIndex((choice) => choice.getAttribute("answer") === "true")
      ?.toString() || "0"
  );
  function changeChoice(i: number, event: React.ChangeEvent<HTMLInputElement>) {
    setChoices((choices) => {
      const newChoices = [...choices];
      newChoices[i].innerHTML = event.target.value;
      return newChoices;
    });
  }
  return (
    <>
      <RadioGroup value={answerIndex || "0"} onChange={setAnswerIndex}>
        <Stack>
          {choices.map((content: Element, i) => {
            return (
              <div className="flex">
                <Radio
                  key={"radio" + i}
                  value={i.toString()}
                  className="m-2 flex-auto"
                ></Radio>
                <Input
                  className="flex-1"
                  placeholder={`選択肢`}
                  value={content.innerHTML}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    changeChoice(i, event)
                  }
                />
              </div>
            );
          })}
        </Stack>
      </RadioGroup>
    </>
  );
}
