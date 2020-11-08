import fs from "fs";
import matter from "gray-matter";
import moment from "moment";
import Link from "next/link";

export default function Blog({ posts }) {
  return (
    <div className="max-w-3xl p4 mx-auto">
      <h1 className="text-accent text-3xl md:text4xl lg:text-5xl xl:text-5xl font-bold my-4">
        Blog Posts
      </h1>
      {posts.map(
        ({ frontmatter: { title, description, date, tags }, slug }) => (
          <article
            className="bg-secondary py-12 px-8 rounded-md my-8"
            key={title}
          >
            <header>
              <h3 className="mb-2">
                <Link href={"/blog/[slug]"} as={`/blog/${slug}`}>
                  <a className="text-3xl font-semibold text-accent no-underline">
                    {title}
                  </a>
                </Link>
              </h3>
              <span className="mb-8 text-sm text-secondary">{date}</span>
            </header>
            <section>
              <p className="my-8 text-primary">{description}</p>
            </section>
            <div className="flex">
              {tags.map((t, i) => (
                <p key={i} className="bg-primary text-accent px-4 py-2 m-2">
                  {t}
                </p>
              ))}
            </div>
          </article>
        )
      )}
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content`);

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    // Convert post date to format: Month day, Year
    const formattedDate = moment(data.date).format("MMM Do YYYY");

    const frontmatter = {
      ...data,
      date: formattedDate,
    };

    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
