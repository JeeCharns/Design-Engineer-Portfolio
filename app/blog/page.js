import Link from "next/link";
import { getPosts } from "@/lib/posts";
import Pagination from "@/components/pagination";
import H1 from "@/components/h1";

export default async function BlogPostsPage({ searchParams }) {
  const sp = await searchParams;
  const tags = sp?.tags ? sp.tags.split(",").filter(Boolean) : undefined;
  const order = sp?.order === "oldest" ? "oldest" : "newest";
  const page = sp.page ?? 1;
  const limit = sp.limit ?? 3;
  const { posts, pageCount } = await getPosts({
    tags,
    newest: order === "newest",
    page,
    limit,
  });
  return (
    <div>
      <H1>Recent posts</H1>
      <div className="mb-8">
        Display&nbsp;
        {order == "newest" && (
          <Link href="/blog?order=oldest" className="underline">
            oldest
          </Link>
        )}
        {order == "oldest" && (
          <Link href="/blog?order=newest" className="underline">
            newest
          </Link>
        )}
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {posts.map((post) => (
          <li key={post.slug} className="p-4 bg-zinc-300 dark:bg-gray-800">
            <Link
              href={`/blog/${post.slug}`}
              className="flex-row font-semibold"
            >
              {post.frontmatter.title}
              <div className="text-base font-normal">
                {post.frontmatter.date}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Pagination pageCount={pageCount} />
      </div>
    </div>
  );
}
