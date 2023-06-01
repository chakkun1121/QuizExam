import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="flex justify-center bg-purple-800 text-white p-2">
        <div className="flex-none">
          <div className="">
            <p>© 2023 chakkun1121</p>
          </div>
          <div className="">
            <Link href="/privacy-policy">プライバシーポリシー</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
