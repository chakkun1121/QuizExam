import EditMain from "./main";
import Tools from "./tools";
import { v4 as getUUID } from "uuid";

export default function EditHome(pageProps: {
  searchParams: { testId: string };
}) {
  const fileID: string = pageProps.searchParams.testId || `test-${getUUID()}`;
  return (
    <>
      <Tools fileID={fileID} />
      <EditMain fileID={fileID} />
    </>
  );
}
