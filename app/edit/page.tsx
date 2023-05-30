import Footer from "../footer";
import Header from "../header";
import EditMain from "./main";
import Tools from "./tools";

export default function EditHome(pageProps: {
  searchParams: { testId: string };
}) {
  const fileID = pageProps.searchParams.testId || "";
  if (!fileID) throw new Error("fileIDがありません");
  return (
    <>
      <Header />
      <Tools />
      <EditMain file ID={fileID} />
      <Footer />
    </>
  );
}
