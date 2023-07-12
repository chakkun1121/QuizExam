"use client";

import { IconButton, Input, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { answerObjectType } from "../../../types/answerObjectType";

export default function AnswerChoices({
  answerObject,
  setAnswer,
  mode,
}: {
  answerObject: answerObjectType;
  setAnswer: (newAnswerObject: object) => void;
  mode: "edit" | "solve" | "view";
}) {
  console.log(answerObject);
  function addChoice() {
    setAnswer({
      ...answerObject,
      choices: {
        choice: [...answerObject.choices.choice, ""],
      },
    });
  }
  function deleteChoice(i: number) {
    setAnswer({
      ...answerObject,
      choices: {
        choice: answerObject.choices.choice.filter((_, index) => index !== i),
      },
    });
  }
  function setAnswerIndex(index: string) {
    setAnswer({
      ...answerObject,
      "@_answerIndex": index,
    });
  }
  function changeChoice(i: number, event: React.ChangeEvent<HTMLInputElement>) {
    const choices = answerObject.choices.choice;
    setAnswer({
      ...answerObject,
      choices: {
        choice: choices.map((choice, index) => {
          return index === i ? event.target.value : choice;
        }),
      },
    });
  }
  return (
    <>
      <RadioGroup
        value={answerObject["@_answerIndex"] || "0"}
        onChange={setAnswerIndex}
      >
        <Stack>
          {answerObject.choices.choice.map((content: string, i) => {
            return (
              <div className="flex">
                <Radio
                  key={"radio" + i}
                  value={i.toString()}
                  className="m-2 flex-auto"
                ></Radio>
                {mode == "edit" ? (
                  <Input
                    className="flex-1"
                    placeholder={`選択肢`}
                    value={content}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      changeChoice(i, event)
                    }
                    autoComplete="off"
                  />
                ) : (
                  <p className="flex-1">{content}</p>
                )}
                {mode == "edit" ? (
                  <IconButton
                    aria-label="選択肢を消去"
                    className="flex-none"
                    onClick={() => deleteChoice(i)}
                  >
                    <DeleteIcon />
                  </IconButton>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </Stack>
      </RadioGroup>
      {mode == "edit" ? (
        <IconButton aria-label="選択肢を追加" onClick={addChoice}>
          <AddIcon />
        </IconButton>
      ) : (
        <></>
      )}
    </>
  );
}
