"use client";

import { IconButton, Input, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

export default function AnswerChoices({
  answerObject,
  setAnswer,
}: {
  answerObject: object;
  setAnswer: (newAnswerObject: object) => void;
}) {
  console.log(answerObject);
  return (
    <>
      {/* <RadioGroup value={answerIndex || "0"} onChange={setAnswerIndex}>
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
                  autoComplete="off"
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
      </IconButton> */}
    </>
  );
}
