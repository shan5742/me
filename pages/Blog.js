import Head from "next/head";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Asam Shan | blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-24 py-12">
        <h1 className="text-accent text-3xl md:text4xl lg:text-5xl xl:text-5xl font-bold mb-4">
          Blog
        </h1>
      </div>
    </div>
  );
}
