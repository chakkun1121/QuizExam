import { Recoil } from "./recoil";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Recoil>
      {children}
    </Recoil>
  );
}
