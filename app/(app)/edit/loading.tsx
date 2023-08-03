"use client";
import { Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <>
      <section className="text-center">
        <Spinner />
        <h2>読み込み中</h2>
        <p>しばらくお待ちください</p>
      </section>
    </>
  );
}
