import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex">
      <Head>
        <title>Asam Shan | home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-12 xl:p-48 lg:p-48 md:p-24 sm:p-24">
        <h1 className="text-primary text-4xl md:text5xl lg:text-6xl xl:text-6xl font-bold">
          Hi, I'm Asam
        </h1>
        <h3 className="text-primary text-3xl md:text4xl lg:text-5xl xl:text-5xl font-bold mb-2">
          A software developer from the 🇬🇧
        </h3>
        <p className="text-primary text-xl md:text-xl lg:text-2xl xl:text-3xl my-4">
          🤓 You can read more about me{" "}
          <Link href="/about">
            <a className="text-accent font-bold">here.</a>
          </Link>
        </p>
        <p className="text-primary text-xl md:text-xl lg:text-2xl xl:text-3xl my-4">
          ✍️ I keep a (somewhat) regular blog{" "}
          <Link href="/blog">
            <a className="text-accent font-bold">here.</a>
          </Link>
        </p>
        <p className="text-primary text-xl md:text-xl lg:text-2xl xl:text-3xl my-4">
          📧 If you want to chat, work together or anything else, you can
          contact me{" "}
          <Link href="mailto:asamshan456@gmail.com">
            <a className="text-accent font-bold">here.</a>
          </Link>
        </p>
        <p className="text-primary text-xl md:text-xl lg:text-2xl xl:text-3xl my-4">
          👨‍💻 Check out what I have been working on{" "}
          <Link href="/projects">
            <a className="text-accent font-bold">here.</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
