"use client";

import { useState } from "react";
import Link from "next/link";
import { fileInfoType, quizType } from "../../../@types/filesInfoType";
import Quiz from "../_components/quiz";
import { notFound } from "next/navigation";

export default function SolveMain({ fileInfo }: { fileInfo: fileInfoType }) {
  const [isShowAnswer, setIsShowAnswer] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState([]);
  console.debug(fileInfo);
  if (!fileInfo) notFound();
  return (
    <>
      <div>
        {fileInfo.content.quizexam.quiz.map((quiz: quizType) => {
          return (
            <Quiz
              quiz={quiz}
              key={quiz["@_quizID"]}
              mode="solve"
              type={quiz["@_type"]}
              isShowAnswer={isShowAnswer}
            />
          );
        })}
      </div>
      {!isShowAnswer ? (
        <button
          onClick={() => {
            setIsShowAnswer(true);
          }}
        >
          解答する
        </button>
      ) : (
        <>
          <Link href="/home">ホーム画面へ</Link>
        </>
      )}
    </>
  );
}
