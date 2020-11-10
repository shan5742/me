import Head from "next/head";
import Link from "next/link";
import data from "../data/projects";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Asam Shan | about</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-8 max-w-6xl mx-auto mt-12">
        <h1 className="text-accent text-3xl md:text4xl lg:text-5xl xl:text-5xl font-bold mb-4">
          Projects
        </h1>
        <p className="text-primary text-xl mb-4">
          Here are some of the projects I have been working on.
        </p>
        <div>
          {data.map((project) => (
            <div
              key={project.id}
              className="flex flex-col py-4 border-b-2 border-blue-400 mb-16"
            >
              <h1 className="text-accent text-3xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-primary">{project.description}</p>
              <div className="flex">
                {project.tech.map((t) => (
                  <p className="bg-secondary text-primary px-4 py-2 m-2">{t}</p>
                ))}
              </div>
              <div className="flex">
                <Link href={project.repo}>
                  <a className="text-accent text-md font-bold hover:underline m-2">
                    REPO
                  </a>
                </Link>
                <Link href={project.demo}>
                  <a className="text-accent text-md font-bold hover:underline m-2">
                    REPO
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Link href="/">
          <a className="text-accent text-md font-bold hover:underline">
            back to home page
          </a>
        </Link>
      </div>
    </div>
  );
}
