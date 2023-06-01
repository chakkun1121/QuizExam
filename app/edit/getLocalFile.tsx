import { useState, useEffect } from "react";

export function useLocalFile(fileID: string) {
  const [file, setFile] = useState<string | null>(null);
  useEffect(() => {
    const localFile = localStorage.getItem(fileID);
    if (localFile) {
      setFile(localFile);
    }
  }, [fileID]);
  return file;
}
