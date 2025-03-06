import Link from "next/link";

export const metadata = {
  title: "Posts - Next.js",
  description: "A simple blog built with Next.js",
};

export default async function PostsPage({ searchParams }) {
  const query = await searchParams;
  // this will log the parameter and the searchParameter e.g. /posts?hello=hi&goodbye=bye will log {hello: 'hi', goodbye: 'bye'}
  console.log("searchParams", query);
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  if (query.sort === "desc") {
    posts.reverse();
  }

  return (
    <div>
      <h1>All Posts</h1>
      <Link href="/posts?sort=asc">Ascending Order</Link>
      <Link href="/posts?sort=desc">Descending Order</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.id} {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
