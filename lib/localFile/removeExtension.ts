"use client";
export function removeExtension(fileName: string) {
  // ファイル名の最後にある .quizexam.xml と .wayaku を消去する
  return fileName.replace(/\.quizexam\.xml$|\.wayaku$/, "");
}
