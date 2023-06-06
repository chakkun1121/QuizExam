import { notFound } from "next/navigation";
import Footer from "../footer";
import Header from "../header";
import EditMain from "./main";
import Tools from "./tools";

export default function EditHome(pageProps: {
  searchParams: { testId: string };
}) {
  const fileID: string = pageProps.searchParams.testId || "";
  console.log(fileID);
  // if (!fileID) notFound();
  return (
    <>
      <Header />
      <Tools />
      <EditMain fileInfo={fileID} />
      <Footer />
    </>
  );
}
