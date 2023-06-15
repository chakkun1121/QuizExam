export default function AnswerHole({ answerXML }: { answerXML: Element }) {
  //answerXMLファイルをばらす
  // <answer>解答<hole>穴埋め箇所</hole>解答</answer> -> ["解答", "穴埋め箇所", "解答"]
  // <answer><hole>穴埋め1</hole><hole>穴埋め2</hole></answer> -> ["","穴埋め1","", "穴埋め2",""]
  const answerArray = answerXML.innerHTML
    .split(/\<hole\>|\<\/hole\>/)
    .map((answer) => {
      return answer.match(/^(\s| |　)*$/) ? null : answer;
    });
  return (
    <>
      <p contentedita>
        {answerArray.map((answer, i) => {
          return i % 2 === 0 ? answer : <Hole>{answer}</Hole>;
        })}
      </p>
    </>
  );
}

function Hole({ children }: { children: string }) {
  return <span className="bg-yellow-200">{children}</span>;
}
