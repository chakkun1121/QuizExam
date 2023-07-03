import SolveMain from "./main";
export const metadata = {
  title: "解答画面 | QuizExam | chakkun1121",
  robot: "noindex",
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
