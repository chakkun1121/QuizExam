"use client";

export async function downloadFile({
  name,
  content,
  fileHandle,
}: {
  name: string;
  content: string;
  fileHandle?: FileSystemFileHandle;
}) {
  if (!name.endsWith(".quizexam.xml")) name += ".quizexam.xml";
  if (window?.showSaveFilePicker) {
    console.debug(fileHandle)
    fileHandle ??= await window.showSaveFilePicker({
      suggestedName: name,
      types: [
        {
          description: "QuizExamファイル",
          accept: { "application/xml": [".quizexam.xml"] },
        },
      ],
    });

    const writable = await fileHandle?.createWritable();
    await writable.write(content);
    await writable.close();
    return;
  }
  const blob = new Blob([content], { type: "application/xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
  a.remove();
}
