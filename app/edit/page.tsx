import Footer from "../footer";
import Header from "../header";
import EditMain from "./main";
import Tools from "./tools";

export default function EditHome(pageProps: {
  searchParams: { testId: string };
}) {
  const fileID: string = pageProps.searchParams.testId || "";
  console.log(fileID);
  if (!fileID) throw new Error("fileIDがありません");
  return (
    <>
      <Header />
      <Tools />
      <EditMain fileInfo={fileID} />
      <Footer />
    </>
  );
}
