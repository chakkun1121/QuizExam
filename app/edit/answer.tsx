import AnswerStandard from "./answer-standard";
import AnswerChoices from "./answer-choices";
import AnswerHole from "./answer-hole";
import AnswerSorting from "./answer-sorting";

export default function Answer({
  index,
  type,
}: {
  index: number;
  type: "standard" | "hold" | "choices" | "sorting";
}) {
  return (
    <>
      {(() => {
        switch (type) {
          case "standard":
            return <AnswerStandard index={index} />;
          case "choices":
            return <AnswerChoices index={index} />;
          case "hold":
            return <AnswerHole index={index} />;
          case "sorting":
            return <AnswerSorting index={index} />;
        }
      })()}
    </>
  );
}
