import Link from "./link";

export default function LinkButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`m-auto block p-1 text-center no-underline ${className}`}
    >
      {children}
    </Link>
  );
}
