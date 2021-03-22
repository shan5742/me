import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex-col m-auto py-4 text-center">
      <p className="font-mono text-primary text-xl mb-2">
        © {new Date().getFullYear()},{` `}made with ❤️ by{" "}
        <Link href="/">
          <a className="font-bold text-accent hover:underline">asam shan</a>
        </Link>
      </p>
      <div className="flex text-center">
        <p className="font-mono text-primary text-xl mr-2">
          Want to support what I do?
        </p>
        <a href="https://www.buymeacoffee.com/asamshan">
          <Image src="/coffee.png" alt="me" width="120" height="30" />
        </a>
      </div>
    </footer>
  );
}
