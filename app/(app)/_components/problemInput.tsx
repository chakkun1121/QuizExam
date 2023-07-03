import { Input } from "@chakra-ui/react";

export default function ProblemInput({
  value,
  onChange,
  className,
  placeholder = "問題",
}: {
  value: string;
  onChange: (e: any) => void;
  className?: string;
  placeholder?: string;
}) {
  return (
    <>
      <Input
        className={className}
        placeholder={placeholder}
        defaultValue={value}
        onChange={onChange}
        autoComplete="off"
      />
    </>
  );
}
