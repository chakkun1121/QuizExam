"use client";
export async function showFilePicker() {
  if (!window.showOpenFilePicker)
    throw new Error("showOpenFilePicker is not defined");
  const FileSystemFileHandles: FileSystemFileHandle[] =
    await window.showOpenFilePicker({
      types: [
        {
          description: "QuizExam File",
          accept: {
            "application/xml": [".quizexam.xml"],
          },
        },
        {
          description: "和訳ファイル",
          accept: {
            "application/wayaku": [".wayaku"],
          },
        },
      ],
      excludeAcceptAllOption: true,
    });
  const FileSystemFileHandle: FileSystemFileHandle = FileSystemFileHandles[0];
  return FileSystemFileHandle;
}
