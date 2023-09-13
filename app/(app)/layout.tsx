"use client";
import { SessionProvider } from "next-auth/react";
import { Recoil } from "./recoil";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Recoil>
      <SessionProvider>{children}</SessionProvider>
    </Recoil>
  );
}
