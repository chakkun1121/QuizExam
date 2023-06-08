"use client";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { SaveIcon } from "@mui/icons-material";
export default function Tools() {
  return (
    <section className="flex bg-blue-200 p-2">
      <TextField
        className="flex-1"
        id="filled-basic"
        defaultValue="無題のテスト"
      />
      <Button variant="保存" startIcon={<SaveIcon />} />
    </section>
  );
}
