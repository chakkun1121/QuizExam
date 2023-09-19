"use client";
import { useState } from "react";
import { answerType } from "../../../@types/filesInfoType";
import TextInput from "../_components/textInput";
import { FaRegCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function AnswerStandard({
  answer,
  setAnswer,
  mode,
  isShowAnswer,
}: {
  answer: answerType;
  setAnswer: (newAnswer: answerType) => void;
  mode: "edit" | "solve";
  isShowAnswer?: boolean;
}) {
  const [currentAnswer, setCurrentAnswer] = useState<string>("");
  const isCorrect = currentAnswer === answer["#text"];
  return (
    <>
      {mode == "edit" ? (
        <TextInput
          type="text"
          className="w-full"
          id="answer"
          placeholder="答え"
          defaultValue={answer["#text"] || ""}
          autoComplete="off"
          onChange={(e) => {
            setAnswer({
              ...answer, //念の為
              "#text": e.target.value as string,
            });
          }}
        />
      ) : (
        <>
          <div className="w-full flex items-center">
            {isShowAnswer && (
              <div className="flex-none">
                {isCorrect ? <FaRegCircle /> : <FaXmark />}
              </div>
            )}
            <TextInput
              type="text"
              className="flex-1"
              id="answer"
              placeholder="解答欄"
              autoCapitalize="off"
              autoComplete="off"
              onChange={(e) => setCurrentAnswer(e.target.value)}
              disabled={isShowAnswer}
            />
          </div>
          {isShowAnswer && (
            <p>
              <span className="select-none">解答: </span>
              {answer["#text"]}
            </p>
          )}
        </>
      )}
    </>
  );
}
