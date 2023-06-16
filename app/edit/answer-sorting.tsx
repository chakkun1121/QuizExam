export default function AnswerSorting({ answerXML }: { answerXML: Element }) {
  const answerArray = answerXML.innerHTML
    .split(/\<sort\>|\<\/sort\>/)
    .map((answer) => {
      return answer.match(/^(\s| |　)*$/) ? null : answer;
    });
  console.log(answerArray);
  return (
    <>
      <p contentEditable>
        {answerArray.map((answer, i) => {
          return i % 2 === 0 ? answer : <Sort>{answer}</Sort>;
        })}
      </p>
    </>
  );
}
function Sort({ children }: { children: string }) {
  return <span className="bg-yellow-200">{children}</span>;
}
