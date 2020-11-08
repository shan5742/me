import Link from "next/link";
import { Toggle } from "./Toggle";
import me from "../images/headshot.jpg";

export default function Header() {
  return (
    <header className="flex justify-between bg-secondary px-10 py-5">
      <Link href="/">
        <img className="h-24 rounded-full" src={me} alt="logo" />
      </Link>
      <Toggle />
    </header>
  );
}
