"use client";
import { useRouter } from "next/navigation";
import EditMain from "./main";
import { v4 as getUUID } from "uuid";
import { useEffect } from "react";

export default function EditHome(pageProps: {
  searchParams: { testId: string };
}) {
  const router = useRouter();
  useEffect(() => {
    if (!pageProps?.searchParams?.testId)
      router.push(`/edit?testId=${getUUID()}`);
  }, []);
  if (!pageProps?.searchParams?.testId)
    return (
      <>
        <h2>新規ファイルを作成中</h2>
      </>
    );
  const fileID: string = pageProps.searchParams.testId;
  return (
    <>
      <EditMain fileID={fileID} />
    </>
  );
}
