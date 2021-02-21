import fs from "fs";
import matter from "gray-matter";
import moment from "moment";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

export default function Blog({ posts }) {
  const sortedBlogPosts = posts.sort((a, b) => {
    return a.frontmatter.date > b.frontmatter.date
      ? -1
      : a.frontmatter.date > b.frontmatter.date
      ? 1
      : 0;
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="relative">
      <div className="max-w-3xl px-8 mt-12 mx-auto">
        <h1 className="text-accent text-3xl md:text4xl lg:text-5xl xl:text-5xl font-bold my-4">
          Blog Posts
        </h1>
        <Link href="/">
          <a className="text-accent text-md font-bold hover:underline">
            back to home page
          </a>
        </Link>
        {sortedBlogPosts.map(
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
                <span className="mb-8 text-sm text-secondary">
                  {moment(date).format("LL")}
                </span>
              </header>
              <section>
                <p className="my-8 text-primary">{description}</p>
              </section>
              <div className="flex flex-wrap">
                {tags.map((t, i) => (
                  <p key={i} className="bg-primary text-accent px-4 py-2 m-2">
                    #{t}
                  </p>
                ))}
              </div>
            </article>
          )
        )}

        <Link href="/">
          <a className="text-accent text-md font-bold hover:underline">
            back to home page
          </a>
        </Link>
      </div>
      <div
        className="sticky bottom-0 right-0 pr-8 pb-8 text-right text-accent cursor-pointer"
        onClick={scrollToTop}
      >
        scroll to top
      </div>
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
    const formattedDate = moment(data.date).toISOString();

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
