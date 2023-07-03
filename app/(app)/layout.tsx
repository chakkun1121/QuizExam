import { ChakraUIRoot } from "./chakra-ui";
import { Recoil } from "./recoil";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Recoil>
      <ChakraUIRoot>{children}</ChakraUIRoot>
    </Recoil>
  );
}
