import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="ArkAngel">
      <img
        src="/images/arkangel-logo.png"
        alt="ArkAngel Logo"
        width={28}
        height={28}
        className="object-contain"
      />
    </Link>
  );
}
