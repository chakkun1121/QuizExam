import Link from "next/link";
// import Account from "./account";

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
      {/* アカウント機能は初期リリース時には未実装 */}
      {/* <div className="flex-none">
        <Account />
      </div> */}
    </header>
  );
}
