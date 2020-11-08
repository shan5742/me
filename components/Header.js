import Link from "next/link";
import { Toggle } from "./Toggle";

export default function Header() {
  return (
    <header className="flex justify-between bg-secondary px-10 py-5">
      <Link href="/">
        <img
          className="h-12 md:h-24 lg:h-24 xl:h-24 rounded-full"
          src="/headshot.jpg"
          alt="logo"
        />
      </Link>
      <Toggle />
    </header>
  );
}
