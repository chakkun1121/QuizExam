"use client";
import { MDXProvider } from "@mdx-js/react";

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style jsx global>{`
        article h1 {
          display: block;
          font-size: 2em;
          margin-block-start: 0.67em;
          margin-block-end: 0.67em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          font-weight: bold;
        }
      `}</style>
      <article className="m-2">
        <MDXProvider components={components}>{children}</MDXProvider>
      </article>
    </>
  );
}
const components = {
  h1: H1,
};
function H1({ children }) {
  return <h1 className="text-x1">{children}</h1>;
}
function H2({ children }) {
  return <h2>{children}</h2>;
}
