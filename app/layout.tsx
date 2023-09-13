import GoogleAnalytics from "./GoogleAnalytics";
import Header from "./_components/header";
import Footer from "./_components/footer";
import "./globals.css";
import type { Metadata } from "next";
const description =
  "QuizExamは自分で一問一答形式などのクイズを作成し、自分で回答することで試験本番の練習をするアプリです。対応するクイズ形式は単純な一問一答形式、穴埋め、選択問題、並べ替えです。";
const title =
  "QuizExam - 一問一答形式のクイズで試験本番の練習をしよう! | chakkun1121";
export const metadata: Metadata = {
  title: title,
  metadataBase: new URL("https://quizexam.vercel.app/"),
  description: description,
  openGraph: {
    title: title,
    images: "/images/ogp.png",
    description: description,
    type: "website",
    url: "/",
    locale: "ja_JP",
    siteName: "QuizExam",
  },
  manifest: "/manifest.json",
  themeColor: "#4ade80",
  alternates: {
    canonical: "/",
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
        <main className="flex-grow m-2">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
