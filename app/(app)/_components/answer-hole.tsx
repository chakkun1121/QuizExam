import { Input } from "@chakra-ui/react";
import { answerHoleType } from "../../../types/answerHoleType";

export default function AnswerHole({
  answerObject,
  setAnswer,
  mode,
}: {
  answerObject: answerHoleType;
  setAnswer?: (newAnswerObject: object) => void;
  mode: "edit" | "solve" | "view";
}) {
  console.log(answerObject);
  return (
    <>
      {mode == "edit" ? (
        <>
          {answerObject.section.map((section, index: number) => {
            return (
              <>
                {typeof section == "string" ? (
                  <Input
                    value={section}
                    onChange={(e) => {
                      setAnswer({
                        ...answerObject,
                        section: answerObject.section.map(
                          (section, i: number) => {
                            return i == index ? e.target.value : section;
                          }
                        ),
                      });
                    }}
                  />
                ) : (
                  <>
                    <p>{section.hole}</p>
                  </>
                )}
              </>
            );
          })}
        </>
      ) : mode == "solve" ? (
        <></>
      ) : (
        <></>
      )}
    </>
  );
}
