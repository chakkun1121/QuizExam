import { JSX, ClassAttributes, InputHTMLAttributes } from "react";

export default function TextInput(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`bg-blue-300 focus:outline-none border-b-2 border-white focus:border-black ${props.className}`}
    />
  );
}
