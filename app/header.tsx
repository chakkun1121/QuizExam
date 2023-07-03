import Link from "next/link";

export default function Header() {
  return (
    <header className="flex bg-green-400 p-1">
      <div className="black flex-1">
        <h1 className="text-4xl font-bold">
          <Link href="/" className="flex-none text-black">
            QuizExam
          </Link>
        </h1>
        <p className="text-sm">一問一答形式のクイズで試験本番の練習をしよう!</p>
      </div>
    </header>
  );
}
