import Footer from "../footer";
import Header from "../header";
import EditMain from "./main";
import Tools from "./tools";
import { v4 as getUUID } from "uuid";

export default function EditHome(pageProps: {
  searchParams: { testId: string };
}) {
  const fileID: string = pageProps.searchParams.testId || `test-${getUUID()}`;
  return (
    <>
      <Header />
      <Tools fileID={fileID} />
      <EditMain fileID={fileID} />
      <Footer />
    </>
  );
}
