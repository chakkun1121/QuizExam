"use client";
import { BiAddToQueue } from "react-icons/bi";
import { RiDeleteBinFill } from "react-icons/ri";
import { answerType, choiceType } from "../../../@types/filesInfoType";
import TextInput from "../_components/textInput";
import IconButton from "../_components/iconButton";
import { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
export default function AnswerChoices({
  answer,
  setAnswer,
  quizID,
  mode,
  isShowAnswer,
}: {
  answer: answerType;
  setAnswer: (newAnswer: answerType) => void;
  quizID: string;
  mode: "edit" | "solve";
  isShowAnswer?: boolean;
}) {
  const [currentAnswer, setCurrentAnswer] = useState<number>();
  const answerIndex = answer.choices?.choice.findIndex((choice: choiceType) => {
    return choice["@_answer"] == ("true" || true);
  });
  const isCorrect = currentAnswer === answerIndex;
  function addChoice() {
    setAnswer({
      ...answer,
      choices: { choice: [...(answer.choices?.choice || []), { "#text": "" }] },
    });
  }
  function deleteChoice(i: number) {
    setAnswer({
      ...answer,
      choices: {
        choice: [
          ...answer.choices.choice.slice(0, i),
          ...answer.choices.choice.slice(i + 1),
        ],
      },
    });
  }
  return (
    <>
      <div>
        {answer.choices?.choice.map((content: choiceType, i: number) => {
          return (
            <div className="flex">
              <input
                className="block flex-none m-2 "
                type="radio"
                key={"radio" + i}
                value={i}
                name={quizID}
                id={quizID + i.toString()}
                defaultChecked={
                  mode == "edit" && content["@_answer"] == ("true" || true)
                }
                disabled={mode == "solve" && isShowAnswer}
                onChange={() => {
                  mode == "edit"
                    ? setAnswer({
                        ...answer,
                        choices: {
                          choice: answer.choices.choice.map(
                            (choice: choiceType, j: number) => {
                              return {
                                ...choice,
                                "@_answer": i === j ? "true" : "false",
                              };
                            }
                          ),
                        },
                      })
                    : setCurrentAnswer(i);
                }}
              />
              {mode == "edit" ? (
                <>
                  <TextInput
                    type="text"
                    className="flex-1"
                    placeholder={`選択肢${i + 1}`}
                    value={content["#text"] || ""}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setAnswer({
                        ...answer,
                        choices: {
                          choice: [
                            ...answer.choices.choice.slice(0, i),
                            {
                              "#text": e.target.value as string,
                            },
                            ...answer.choices.choice.slice(i + 1),
                          ],
                        },
                      });
                    }}
                    autoComplete="off"
                  />
                  <IconButton
                    aria-label="選択肢を消去"
                    className="flex-none"
                    onClick={() => deleteChoice(i)}
                  >
                    <RiDeleteBinFill />
                  </IconButton>
                </>
              ) : (
                <>
                  <label
                    htmlFor={quizID + i.toString()}
                    className="flex-1 select-none"
                  >
                    {content["#text"]}
                  </label>
                  {isShowAnswer && (
                    <div className="flex-none">
                      {i == answerIndex ? <FaRegCircle /> : <FaXmark />}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
      {mode == "edit" && (
        <IconButton aria-label="選択肢を追加" onClick={addChoice}>
          <BiAddToQueue />
        </IconButton>
      )}
    </>
  );
}
