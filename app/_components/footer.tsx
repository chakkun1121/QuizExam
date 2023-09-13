import Link from "./link";

export default function Footer() {
  return (
    <>
      <footer className="flex justify-center bg-purple-800 p-2 text-white">
        <div className="flex-none">
          <div className="">
            <Link
              href="https://chakkun1121.github.io/"
              target="_blank"
              className="text-white hover:text-white visited:text-white no-underline"
            >
              © 2023 chakkun1121
            </Link>
          </div>
          <div className="">
            <Link
              href="/privacy-policy"
              className="text-white hover:text-white visited:text-white no-underline"
            >
              プライバシーポリシー
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
