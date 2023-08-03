import Image from "next/image";
import { fileInfoType } from "../../../types/fileInfoType";
import { downloadFile } from "../../../lib/download";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BiEditAlt } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
import Link from "../../_components/link";
export default function File({
  fileInfo,
  fileContent,
}: {
  fileInfo: fileInfoType;
  fileContent: string;
}) {
  return (
    <>
      <div className="m-2 flex-none rounded bg-blue-400 p-2">
        <div className="flex items-center">
          <div className="flex-none p-1">
            <Image
              width={48}
              height={48}
              src={`/icons/${fileInfo.savedPlace}.png`}
              alt={`${savedPlaceJapanese[fileInfo.savedPlace]}ファイル`}
            />
          </div>
          <div className="max-w-full flex-auto truncate">
            <h3>{fileInfo.name}</h3>
          </div>
          <div className="flex-none">
            <Menu colorScheme="none">
              <MenuButton as={IconButton} icon={<FiMoreVertical />} />
              <MenuList>
                <MenuItem icon={<BiEditAlt />} command="e">
                  <Link href={`/edit?testId=${fileInfo.ID}`}>編集</Link>
                </MenuItem>
                <MenuItem>
                  <Link href={`/solve?testId=${fileInfo.ID}`}>回答する</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        <div className="flex">
          <div className="flex-none">
            <p>
              作成日:
              <span>
                {new Date(fileInfo.createdDate).toLocaleDateString("ja-JP")}
              </span>
            </p>
            <p>
              最終編集日:
              <span>
                {new Date(fileInfo.lastUpdatedDate).toLocaleDateString("ja-JP")}
              </span>
            </p>
          </div>
          <div className="flex">
            <LinkButton href={`/edit?testId=${fileInfo.ID}`}>編集</LinkButton>
            <LinkButton href={`/solve?testId=${fileInfo.ID}`}>
              回答する
            </LinkButton>
            <button
              onClick={() =>
                downloadFile({
                  fileName: fileInfo.name,
                  file: fileContent,
                })
              }
              className="m-2 rounded border border-black bg-blue-600 p-2 text-white visited:text-white"
            >
              ダウンロード
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
function LinkButton({ href, children }: { href: string; children: string }) {
  return (
    <div className="m-2 rounded border border-black bg-blue-600 p-2">
      <Link href={href} className="text-white visited:text-white">
        {children}
      </Link>
    </div>
  );
}
const savedPlaceJapanese = {
  local: "ローカル",
  cloud: "クラウド",
  GoogleDrive: "GoogleDrive",
};
