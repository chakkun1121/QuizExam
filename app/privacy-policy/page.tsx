import Footer from "../footer";
import Header from "../header";
import PrivacyPolicy from "./main";
export const metadata = {
  title: "プライバシーポリシー | QuizExam | chakkun1121",
};
export default function PrivacyPolicyPages() {
  return (
    <>
      <Header />
      <main className="flex justify-center flex-col mx-auto p-1 max-w-3xl">
        <PrivacyPolicy />
      </main>
      <Footer />
    </>
  );
}
