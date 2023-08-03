import Link from "next/link";

export default function Header() {
  return (
    <header className="flex bg-green-400 p-1">
      <div className="black flex-1">
        <Link
          href="/"
          className="flex-none text-black visited:text-black hover:no-underline"
        >
          <h1 className="">QuizExam</h1>
        </Link>
        <p className="text-M">一問一答形式のクイズで試験本番の練習をしよう!</p>
      </div>
    </header>
  );
}
