import { Metadata } from "next";
import SolveMain from "./main";
export const metadata: Metadata = {
  title: "解答画面 | QuizExam | chakkun1121",
  robots: "noindex",
  alternates: { canonical: "/solve" },
};
export default function SolveHome(pageProps: {
  searchParams: { testId: string };
}) {
  const fileID: string = pageProps.searchParams.testId;
  return (
    <>
      <SolveMain fileID={fileID} />
    </>
  );
}
