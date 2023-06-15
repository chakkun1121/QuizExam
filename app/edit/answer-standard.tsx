import { TextField } from "@mui/material";

export default function AnswerStandard({ answerXML }: { answerXML: Element }) {
  return (
    <TextField
      className="w-full"
      id="answer"
      label="答え"
      variant="standard"
      defaultValue={answerXML.innerHTML}
    />
  );
}
