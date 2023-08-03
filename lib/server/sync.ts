import { isLogin } from "../../app/(app)/_account/isLogin";
import { filesInfoType } from "../../types/filesInfoType";

export function syncFilesInfo(localFilesInfo: filesInfoType) {
  if (!isLogin())
    return new Promise<string>((_, rej) => {
      rej("ログインしていません");
    });
  return new Promise<string>((res) => {
    res("ファイルを同期しました(テスト)");
  }); //test
}
