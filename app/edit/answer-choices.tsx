"use client";
import { use, useEffect, useState } from "react";
import { getAnswerXML, resentFileArrayAtom } from "./main";
import { IconButton, Input, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { useRecoilState } from "recoil";

export default function AnswerChoices({ index }: { index: number }) {
  const answerXML = getAnswerXML(index);
  const [_, setRecentFileArray] =
    useRecoilState<Array<Element>>(resentFileArrayAtom);
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
  useEffect(() => {
    console.log(answerIndex, choices);
    setRecentFileArray((recentFileArray) => {
      const answerXML: Element = new DOMParser().parseFromString(
        `<answer><choices>${choices
          .map((choice, i: number) => {
            return `<choice ${
              i == Number(answerIndex) ? `answer="true"` : ""
            }>${choice.innerHTML}</choice>`;
          })
          .join("")}</choices></answer>`,
        "text/xml"
      ).documentElement;
      const cashRecentFileArray = [...recentFileArray];
      return cashRecentFileArray.map((quizXML: Element, i: number) => {
        if (index == i) {
          const cashQuizXML = quizXML.cloneNode(true) as Element;
          cashQuizXML.getElementsByTagName("answer")[0].innerHTML =
            answerXML.innerHTML;
          return cashQuizXML;
        } else {
          return quizXML;
        }
      });
    });
  }, [choices, answerIndex]);
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
