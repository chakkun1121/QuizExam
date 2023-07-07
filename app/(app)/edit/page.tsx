import { Metadata } from "next";
import EditMain from "./main";
import Tools from "./tools";
import { v4 as getUUID } from "uuid";
export const metadata: Metadata = {
  title: "編集画面 | QuizExam | chakkun1121",
  robots: "noindex",
};
export default function EditHome(pageProps: {
  searchParams: { testId: string };
}) {
  const fileID: string = pageProps.searchParams.testId || `test-${getUUID()}`;
  return (
    <>
      <Tools fileID={fileID} />
      <EditMain fileID={fileID} />
    </>
  );
}
