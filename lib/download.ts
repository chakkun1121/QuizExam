"use client";

export async function downloadFile({
  fileName,
  file,
}: {
  fileName: string;
  file: string;
}) {
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
  await writable.write(file);
  await writable.close();
  return;
}
