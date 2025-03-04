export const metadata = {
  title: "Posts - Next.js",
  description: "A simple blog built with Next.js",
};

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return (
    <div>
      <h1>All Posts</h1>
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
