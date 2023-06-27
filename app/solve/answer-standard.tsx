"use client";
import { getAnswerXML } from "../edit/main";
import { Input } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { currentAnswerAtom, isShowAnswerAtom } from "./main";
import { FaRegCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function AnswerStandard({
  index,
  quizID,
}: {
  index: number;
  quizID: string;
}) {
  const answerXML: Element = getAnswerXML(index);
  const [currentAnswer, setCurrentAnswer] =
    useRecoilState<Object>(currentAnswerAtom);
  const [isShowAnswer] = useRecoilState<boolean>(isShowAnswerAtom);
  const answer = answerXML.innerHTML;
  return (
    <div className="flex">
      <div className="flex-none">
        {isShowAnswer ? (
          <div className="m-1">
            {currentAnswer[quizID] == answer ? (
              <>
                <FaRegCircle />
              </>
            ) : (
              <>
                <FaXmark />
              </>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="flex-1">
        <Input
          className="w-full"
          id="answer"
          placeholder="解答欄"
          defaultValue={currentAnswer[quizID]}
          onChange={(e) => {
            setCurrentAnswer({ ...currentAnswer, [quizID]: e.target.value });
          }}
          isDisabled={isShowAnswer}
          autoComplete="off"
        />
        {isShowAnswer ? <p>解答: {answer}</p> : <></>}
      </div>
    </div>
  );
}
