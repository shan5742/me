import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex">
      <Head>
        <title>Asam Shan | home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-6xl mx-auto mt-24 px-8">
        <h1 className="text-primary text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold">
          Hi, I'm Asam
        </h1>
        <h3 className="text-primary text-3xl md:text4xl lg:text-4xl xl:text-4xl font-bold mb-2">
          A software developer from the 🇬🇧
        </h3>
        <p className="text-primary text-lg md:text-lg lg:text-xl xl:text-xl my-4">
          🤓 You can read more about me{" "}
          <Link href="/about">
            <a className="text-accent underline hover:font-bold">here.</a>
          </Link>
        </p>
        <p className="text-primary text-lg md:text-lg lg:text-xl xl:text-xl my-4">
          ✍️ I keep a (somewhat) regular blog{" "}
          <Link href="/blog">
            <a className="text-accent underline hover:font-bold">here.</a>
          </Link>
        </p>
        <p className="text-primary text-lg md:text-lg lg:text-xl xl:text-xl my-4">
          📧 If you want to chat, work together or anything else, you can
          contact me{" "}
          <Link href="mailto:asamshan456@gmail.com">
            <a className="text-accent underline hover:font-bold">here.</a>
          </Link>
        </p>
        <p className="text-primary text-lg md:text-lg lg:text-xl xl:text-xl my-4">
          👨‍💻 Check out what I have been working on{" "}
          <Link href="/projects">
            <a className="text-accent underline hover:font-bold">here.</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
