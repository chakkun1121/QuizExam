export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <article className="m-2">{children}</article>
    </>
  );
}
