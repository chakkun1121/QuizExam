import { Metadata } from "next";
import Link from "./_components/link";

export const metadata: Metadata = {
  title: "404 ページが見つかりません | QuizExam | chakkun1121",
  robots: "noindex",
};
export default function NotFound() {
  return (
    <>
      <h1>404 ページが見つかりません</h1>
      <Link href="/">ホームへ戻る</Link>
    </>
  );
}
