import { Metadata } from "next";
import PrivacyPolicy from "./main";
export const metadata: Metadata = {
  title: "プライバシーポリシー | QuizExam | chakkun1121",
};
export default function PrivacyPolicyPages() {
  return (
    <>
      <section className="mx-auto flex max-w-3xl flex-col justify-center p-1">
        <PrivacyPolicy />
      </section>
    </>
  );
}
