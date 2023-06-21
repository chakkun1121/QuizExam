import { useRecoilState } from "recoil";
import { isShowAnswerAtom } from "./main";

export default function Answer({ answerXML ,type}: { answerXML: Element ,type:string}) {
  
  const [isShowAnswer, setIsShowANswer] = useRecoilState(isShowAnswerAtom);
  return <>
    
  </>
}
