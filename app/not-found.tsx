import Link from "next/link";
export const metadata = {
  title: "404 ページが見つかりません | QuizExam | chakkun1121",
};
export default function NotFound() {
  return (
    <>
      <h1>404 ページが見つかりません</h1>
      <Link href="/">ホームへ戻る</Link>
    </>
  );
}
