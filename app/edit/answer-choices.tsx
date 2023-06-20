"use client";
import { useState } from "react";
import { getAnswerXML } from "./main";
import { IconButton, Input, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

export default function AnswerChoices({ index }: { index: number }) {
  const [answerXML, setAnswerXML] = useState<Element>(getAnswerXML(index));
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
  function addChoice() {
    setChoices((choices) => {
      const newChoices = [...choices];
      const newChoice = new Document().createElement("choice");
      newChoice.innerHTML = "選択肢";
      newChoices.push(newChoice);
      return newChoices;
    });
  }
  function deleteChoice(i: number) {
    setChoices((choices) => {
      const newChoices = [...choices];
      newChoices.splice(i, 1);
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
                <IconButton
                  aria-label="選択肢を消去"
                  className="flex-none"
                  onClick={() => deleteChoice(i)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            );
          })}
        </Stack>
      </RadioGroup>
      <IconButton aria-label="選択肢を追加" onClick={addChoice}>
        <AddIcon />
      </IconButton>
    </>
  );
}
