"use client";

export async function downloadFile(fileName: string, fileContent: string) {
  const fileHandle = await window.showSaveFilePicker({
    suggestedName: `${fileName}.quizexam.xml`,
    types: [
      {
        description: "QuizExamファイル",
        accept: { "application/xml": [".quizexam.xml"] },
      },
    ],
  });
  const writable = await fileHandle.createWritable();
  await writable.write(fileContent);
  await writable.close();
  return;
}
