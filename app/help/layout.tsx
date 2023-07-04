"use client";
import { MDXProvider } from "@mdx-js/react";

export default function HelpLayout(props: any) {
  return (
    <>
      {/* ここはゴリ押しなので早めに書き換える */}
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
        <MDXProvider components={components} {...props} />
      </article>
    </>
  );
}

// todo: ここが適応されない
const Heading = {
  H1: (props: any) => {
    return <h1 className="text-2x1" {...props} />;
  },
};

const components = {
  h1: Heading.H1,
};
