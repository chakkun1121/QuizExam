"use client";
import { ChakraProvider } from "@chakra-ui/react";

export function ChakraUIRoot({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
