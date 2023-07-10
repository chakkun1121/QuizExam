import { Metadata } from "next";

export const metadata: Metadata = {
  title: "編集画面 | QuizExam | chakkun1121",
  robots: "noindex",
};
export default function EditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
