import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

function PostTemplate({ content, data }) {
  // This holds the data between `---` from the .md file
  const frontmatter = data;

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative">
      <div className="markdown max-w-3xl mt-12 px-8 flex flex-col mx-auto">
        <h1>{frontmatter.title}</h1>
        <ReactMarkdown source={content} />
        <div className="flex">
          {frontmatter.tags.map((t, i) => (
            <p key={i} className="bg-secondary text-primary px-4 py-2 m-2">
              {t}
            </p>
          ))}
        </div>
        <Link href="/blog">
          <a className="text-accent text-md font-bold hover:underline">
            back to blog
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

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;
  // Import markdown file using the `slug` from the URL
  const content = await import(`../../content/${slug}.md`);

  // Parse .md data
  const data = matter(content.default);

  // Pass data to our component props
  return { ...data };
};

export default PostTemplate;
