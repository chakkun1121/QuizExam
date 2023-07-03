import { Select } from "@chakra-ui/react";

export default function TypeSelect({
  value,
  placeholder = "形式を選択",
  onChange,
  options,
}: {
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ value: string; label: string }>;
}) {
  return (
    <>
      <Select
        id="choose-type-select"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </>
  );
}
