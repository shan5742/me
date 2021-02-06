import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center py-8">
      <p className="font-mono text-primary text-xl">
        © {new Date().getFullYear()},{` `}made with ❤️ by{" "}
        <Link href="/">
          <a className="font-bold text-accent hover:underline">asam shan</a>
        </Link>
      </p>
    </footer>
  );
}
