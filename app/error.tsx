"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <Header />
      <main>
        <h2>エラーが発生しました。</h2>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          リトライ
        </button>
        <a>フィードバックを送信する</a>
        <details>
          <summary>エラーの詳細</summary>
          <pre>{error.message}</pre>
        </details>
      </main>
      <Footer />
    </>
  );
}
