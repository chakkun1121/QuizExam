import { filesInfoType } from "../../types/filesInfoType";

export function syncFilesInfo(localFilesInfo: filesInfoType) {
  return new Promise<string>((res) => {
    res("ファイルを同機しました(テスト)");
  }); //test
}
