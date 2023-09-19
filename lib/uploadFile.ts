"use client";

async function showFilePicker() {
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
      ],
    });
  const FileSystemFileHandle: FileSystemFileHandle = FileSystemFileHandles[0];
  return FileSystemFileHandle;
}
export async function uploadFile(): Promise<{
  content: string;
  fileName: string;
  fileHandle?: FileSystemFileHandle;
}> {
  try {
    if (window.showOpenFilePicker) {
      const fileHandle = await showFilePicker();
      const file = await fileHandle.getFile();
      const content = await file.text();
      const fileName = file.name;
      return { content, fileName, fileHandle };
    }
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".quizexam.xml";
    fileInput.click();
    const file = await new Promise<File>((resolve) => {
      fileInput.addEventListener("change", () => {
        const file = fileInput.files[0];
        resolve(file);
      });
    });
    fileInput.remove();
    const content = await file.text();
    const fileName = file.name;
    if (!fileName.endsWith(".quizexam.xml"))
      throw new Error("File extension is not .quizexam.xml");
    return { content, fileName };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
