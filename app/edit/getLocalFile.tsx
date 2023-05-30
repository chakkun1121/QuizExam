import { useState, useEffect } from "react";

// 作り途中
export function useLocalFile(fileID: string) {
  const [file, setFile] = useState<LocalFileType | null>(null);
  useEffect(() => {
    const localFile = localStorage.getItem(fileID);
    if (localFile) {
      setFile(JSON.parse(localFile));
    }
  }, [fileID]);
  return file;
}
