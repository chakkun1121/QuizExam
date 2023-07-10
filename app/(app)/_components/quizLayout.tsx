export default function QuizLayout({
  mode,
  children: [Problem, Answer, SelectType = <></>, Delate = <></>],
}: {
  mode: "edit" | "solve" | "view";
  children: any;
}) {
  return (
    <>
      <div className="m-2 flex rounded bg-blue-300 p-2">
        <div className="flex-1">
          <div className="flex">
            <div className="m-1 flex-1">{Problem}</div>
          </div>
          <div className="md:flex">
            <div className="m-1 flex-1">
              <div className="flex-none">{Answer} </div>
            </div>
            {mode == "edit" ? (
              <div className="m-1 flex-none md:w-80">{SelectType} </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        {mode == "edit" ? <div className="flex-none">{Delate} </div> : <></>}
      </div>
    </>
  );
}
