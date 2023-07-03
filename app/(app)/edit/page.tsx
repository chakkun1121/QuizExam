import EditMain from "./main";
import Tools from "./tools";
import { v4 as getUUID } from "uuid";
export const metadata = {
  title: "編集画面 | QuizExam | chakkun1121",
  robot: "noindex",
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
