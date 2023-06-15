import Link from "next/link";
import Header from "./header";
import Footer from "./footer";
export const metadata = {
  title: "404 ページが見つかりません | QuizExam | chakkun1121",
};
export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <h1>404 ページが見つかりません</h1>
        <Link href="/">ホームへ戻る</Link>
      </main>
      <Footer />
    </>
  );
}
