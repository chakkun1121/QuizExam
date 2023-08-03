"use client";
import { fileInfoType } from "../../../types/fileInfoType";
import { Input, IconButton } from "@chakra-ui/react";
import React from "react";
import { IoAddOutline } from "react-icons/io5";

const Tools = React.memo(
  ({
    fileInfo,
    setFileName,
    addQuiz,
  }: {
    fileInfo: fileInfoType;
    setFileName: (fileName: string) => void;
    addQuiz: () => void;
  }) => {
    return (
      <section className="flex bg-blue-200 p-2">
        <div className="flex flex-1">
          <Input
            className="flex-1"
            id="filled-basic"
            defaultValue={fileInfo.name || "無題のテスト"}
            placeholder="テスト名を入力"
            onChange={(e) => {
              setFileName(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-none">
          <IconButton
            aria-label="問題を追加"
            icon={<IoAddOutline />}
            onClick={addQuiz}
          />
        </div>
      </section>
    );
  }
);

export default Tools;
