import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";

export default function AnswerChoices({ answerXML }: { answerXML: Element }) {
  const choices = Array.from(answerXML.getElementsByTagName("choice"));
  console.log(choices);
  const answerIndex = choices.findIndex(
    (choice) => choice.getAttribute("answer") === "true"
  );
  return (
    <div className="flex">
      <RadioGroup defaultValue={answerIndex || 0}>
        {choices.map((_, i) => {
          return (
            <FormControlLabel
              key={"radio" + i}
              value={i}
              control={<Radio />}
              label=""
            />
          );
        })}
      </RadioGroup>
      <div className="w-full flex-1">
        {choices.map((choice, i) => {
          return (
            <>
              <TextField
                key={"edit" + i}
                className="w-full"
                id={"answer" + i}
                label={"選択肢" + (i + 1)}
                variant="standard"
                defaultValue={choice.innerHTML}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
