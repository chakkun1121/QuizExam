"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Button } from "@chakra-ui/react";

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
      <main className="m-1">
        <h2>エラーが発生しました。</h2>
        <div>
          <p>
            <Button
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
            >
              リトライ
            </Button>
          </p>
          <a>フィードバックを送信する</a>
        </div>
        <details>
          <summary>エラーの詳細</summary>
          <pre>{error.message}</pre>
        </details>
      </main>
    </>
  );
}
