import { Metadata } from "next";

export const metadata: Metadata = {
  title: "解答画面 | QuizExam | chakkun1121",
  robots: "noindex",
  alternates: { canonical: "/solve" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
