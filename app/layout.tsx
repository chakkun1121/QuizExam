import GoogleAnalytics from "./GoogleAnalytics";
import Footer from "./_components/footer";
import Header from "./_components/header";
import "./globals.css";
import type { Metadata } from "next";
const description =
  "QuizExamは自分で一問一答形式などのクイズを作成し、自分で回答することで試験本番の練習をするアプリです。対応するクイズ形式は単純な一問一答形式、穴埋め、選択問題、並べ替えです。";
const title =
  "QuizExam - 一問一答形式のクイズで試験本番の練習をしよう! | chakkun1121";
const url = "https://quizexam.vercel.app/";
export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    images: "/images/ogp.png",
    description: description,
    type: "website",
    url: url,
    locale: "ja_JP",
    siteName: "QuizExam",
  },
  manifest: "/manifest.json",
  themeColor: "#4ade80",
  alternates: {
    canonical: url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <GoogleAnalytics />
      <body className="flex min-h-screen flex-col">
        <Header />
        <div className=" my-2 w-full flex-grow px-6">
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-12">
            <main className="gap-22 col-span-full flex flex-col">
              {children}
            </main>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
