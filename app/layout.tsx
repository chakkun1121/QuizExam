import GoogleAnalytics from "./GoogleAnalytics";
import { ChakraUIRoot } from "./chakra-ui";
import "./globals.scss";
import { Recoil } from "./recoil";

export const metadata = {
  title:
    "QuizExam - 一問一答形式のクイズで試験本番の練習をしよう! | chakkun1121",
  description:
    "QuizExamは自分で一問一答形式などのクイズを作成し、自分で回答することで試験本番の練習をするアプリです。対応するクイズ形式は単純な一問一答形式、穴埋め、選択問題、並べ替えです。",
  image: "/images/ogp.png",
  url: "https://quizexam.vercel.app/",
  manifest: "/manifest.json",
  themeColor: "#4ade80",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <GoogleAnalytics />
      <Recoil>
        <ChakraUIRoot>
          <body>{children}</body>
        </ChakraUIRoot>
      </Recoil>
    </html>
  );
}
