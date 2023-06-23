"use client";
import { useEffect, useState } from "react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { getAnswerXML } from "../edit/main";
import { useRecoilState } from "recoil";
import { currentAnswerAtom, isShowAnswerAtom } from "./main";
import { FaRegCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function AnswerChoices({
  index,
  quizID,
}: {
  index: number;
  quizID: string;
}) {
  /**
   * currentAnswer: 現在解答中の問題のすべての解答を保存するobject
   * currentAnswerIndex: 現在解答中のこの選択式の問題選択しているindex
   * answerIndex: この選択式の問題の正解のindex
   */
  const [currentAnswer, setCurrentAnswer] =
    useRecoilState<Object>(currentAnswerAtom);
  const [answerXML] = useState<Element>(getAnswerXML(index));
  const choices: Array<Element> = Array.from(
    answerXML?.getElementsByTagName("choice") || []
  );
  const [isShowAnswer] = useRecoilState<boolean>(isShowAnswerAtom);
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState<number>(
    currentAnswer[quizID] || null
  );
  const [answerIndex] = useState<number>(
    (choices?.findIndex((choice) => choice.getAttribute("answer") === "true") +
      1 || -2) - 1
  );
  useEffect(() => {
    setCurrentAnswer({ ...currentAnswer, [quizID]: answerIndex });
  }, [currentAnswerIndex]);
  console.log(currentAnswer);
  return (
    <>
      <RadioGroup
        value={currentAnswerIndex?.toString()}
        onChange={(value) => {
          setCurrentAnswerIndex(Number(value));
        }}
      >
        <Stack>
          {choices.map((content: Element, i) => {
            return (
              <div className="flex w-full flex-none">
                <div className="flex-1">
                  <Radio
                    key={"radio" + i}
                    value={i.toString()}
                    className="m-2 flex"
                    isDisabled={isShowAnswer}
                    onChange={(e) => {
                      setCurrentAnswerIndex(Number(e.target.value));
                    }}
                  >
                    <div className="flex-1">{content.innerHTML}</div>
                  </Radio>
                </div>
                <div className="flex-none">
                  {isShowAnswer &&
                  (answerIndex == i || currentAnswerIndex == i) ? (
                    <>{answerIndex == i ? <FaRegCircle /> : <FaXmark />}</>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            );
          })}
        </Stack>
      </RadioGroup>
    </>
  );
}
