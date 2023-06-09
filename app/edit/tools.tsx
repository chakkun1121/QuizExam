"use client";
import { IconButton, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Save as SaveIcon, Add as AddIcon } from "@mui/icons-material";
import { useRecoilState } from "recoil";
import { filesInfoState, fileInfoType } from "../../lib/filesInfo";
import { useState } from "react";
export default function Tools({ fileID }: { fileID: string }) {
  const [filesInfo, setFilesInfo] = useRecoilState(filesInfoState);
  console.log(filesInfo);
  const [fileInfo, setFileInfo] = useState<fileInfoType>(
    filesInfo?.files?.find((fileInfo: fileInfoType) => fileInfo.ID === fileID)
  );
  console.log(fileInfo);
  return (
    <section className="flex bg-blue-200 p-2">
      <div className="flex flex-1">
        <TextField
          className="flex-1"
          id="filled-basic"
          defaultValue={fileInfo?.name || "無題のテスト"}
        />
        <Button
          variant="outlined"
          startIcon={<SaveIcon />}
          className="text-black"
        >
          保存
        </Button>
      </div>
      <div className="flex flex-none">
        <IconButton aria-label="問題を追加">
          <AddIcon />
        </IconButton>
      </div>
    </section>
  );
}
