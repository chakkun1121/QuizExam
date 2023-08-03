"use client";
import { MDXProvider } from "@mdx-js/react";

export default function HelpLayout(props: any) {
  return (
    <>
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
