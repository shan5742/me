import Link from "next/link";
import { Toggle } from "./Toggle";

export default function Header() {
  return (
    <header className="flex justify-between  px-5 py-2">
      <Link href="/">
        <img
          className="h-8 md:h-16 lg:h-16 xl:h-16 rounded-full logoLink"
          src="/headshot.jpg"
          alt="logo"
        />
      </Link>
      <Toggle />
    </header>
  );
}
