import Link from "./_components/link";

export default function Home() {
  return (
    <>
      <Title />
    </>
  );
}
function Title() {
  return (
    <section className="grid justify-center p-10">
      <div>
        <h1 className="">QuizExam</h1>
      </div>
      <div>
        <h2 className="">一問一答形式のクイズで試験本番の練習をしよう!</h2>
      </div>
      <div className="">
        <Link href="/home">早速使ってみる</Link>
      </div>
    </section>
  );
}
