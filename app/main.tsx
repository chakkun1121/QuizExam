import Link from "next/link";

export default function Main() {
  return (
    <>
      <main>
        <Title />
      </main>
    </>
  );
}
function Title() {
  return (
    <section className="grid justify-center p-10">
      <div>
        <h1 className="text-5xl font-bold">QuizExam</h1>
      </div>
      <div>
        <h2 className="text-4x1 font-bold">
          一問一答形式のクイズで試験本番の練習をしよう!
        </h2>
      </div>
      <div className="text-purple-800">
        <Link href="/home">早速使ってみる</Link>
      </div>
    </section>
  );
}
