import { JSX, ClassAttributes, ButtonHTMLAttributes } from "react";

export default function IconButton(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLButtonElement> &
    ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className={`border rounded-full p-2 bg-blue-200 hover:bg-blue-400 m-1 ${props.className}`}
    />
  );
}
