import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <Head>
        <title>Asam Shan | about</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-24 py-12">
        <h1 className="text-accent text-3xl md:text4xl lg:text-5xl xl:text-5xl font-bold mb-4">
          About Me
        </h1>
        <p className="text-primary text-xl mb-4">
          I am a software engineer working in the Javascript space, I am a big
          fan of the jam stack. I have a lot of experience with Gatsby and
          React, but have more recently started looking at Vue. In fact this
          very site was built with Gridsome, a static site generator for Vue,
          which is heavily influenced by Gatsby.
        </p>
        <p className="text-primary text-xl mb-4">
          I am a second career developer who came from the business world. My
          experience in business has helped me understand the commercial side of
          this world, which has been very useful thus far in my career.
        </p>
        <p className="text-primary text-xl mb-4">
          Outside of work I am interested in learning more about the operations
          side of the industry, I have a great friend helping me with the
          Docker, AWS, K8s and more as well as starting to get more and more
          experience with NodeJS in a bid to become a more well rounded
          engineer.
        </p>
        <h1 className="text-accent text-3xl md:text4xl lg:text-5xl xl:text-5xl font-bold mb-4">
          Mentoring
        </h1>
        <p className="text-primary text-xl mb-4">
          I have been lucky enough to have some great mentors so far in my
          career. Without these I definitely wouldn't be where I am today. To
          that end I try to give back and look to help as many people looking to
          get into the industry as I can. You can find more about my mentoring
          over at{" "}
          <Link href="https://mentors.codingcoach.io/?name=Asam+Shan">
            <a className="text-accent font-bold hover:underline">
              Coding Coach
            </a>
          </Link>
        </p>
        <h1 className="text-accent text-3xl md:text4xl lg:text-5xl xl:text-5xl font-bold mb-4">
          Writing
        </h1>
        <p className="text-primary text-xl mb-4">
          Not that you would know it given the state of my{" "}
          <Link href="https://mentors.codingcoach.io/?name=Asam+Shan">
            <a className="text-accent font-bold hover:underline">blog</a>
          </Link>
          , but I had a small stint writing for a living. I have always enjoyed
          it and kept a blog for the past couple of years essentially
          journalling my journey into web development. It is not your typical
          dev blog filled with tutorials - there are already a bunch of those,
          but I hope it gives insight into how I came from 0 to hired and I hope
          it can help others do the same.
        </p>
        <Link href="/">
          <a className="text-accent text-md font-bold hover:underline">
            back to home page
          </a>
        </Link>
      </div>
    </div>
  );
}
