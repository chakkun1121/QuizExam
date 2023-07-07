import { Metadata } from "next";
import Achievement from "./achievement";
import Files from "./files";
export const metadata: Metadata = {
  title: "ホーム | QuizExam  | chakkun1121",
};
export default function Home() {
  return (
    <>
      <Achievement />
      <Files />
    </>
  );
}
