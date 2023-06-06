import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="flex justify-center bg-purple-800 p-2 text-white">
        <div className="flex-none">
          <div className="">
            <p>© 2023 chakkun1121</p>
          </div>
          <div className="">
            <Link href="/privacy-policy" className="text-white">
              プライバシーポリシー
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
