import fs from "fs";
import matter from "gray-matter";
import moment from "moment";
import Link from "next/link";

export default function Blog({ posts }) {
  return (
    <div className="max-w-5xl p4 mx-auto">
      <h1 className="text-accent text-3xl md:text4xl lg:text-5xl xl:text-5xl font-bold mb-4">
        Posts
      </h1>
      {posts.map(({ frontmatter: { title, description, date }, slug }) => (
        <article key={title}>
          <header>
            <h3 className="mb-2">
              <Link href={"/blog/[slug]"} as={`/blog/${slug}`}>
                <a className="text-3xl font-semibold text-accent no-underline">
                  {title}
                </a>
              </Link>
            </h3>
            <span className="mb-4 text-sm text-white">{date}</span>
          </header>
          <section>
            <p className="mb-8 text-primary">{description}</p>
          </section>
        </article>
      ))}
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
