import Link from "next/link";

export default function RootPage() {
  console.log("RootPage render");

  return (
    <div>
      <main>
        <h1>Next.js `dynamicIO` App</h1>
        <ul>
          <li>
            <Link href="/cached_page">Cached page</Link>
          </li>
          <li>
            <Link href="/dynamic_page">Dynamic Page</Link>
          </li>
          <li>
            <Link href="/cached_func">Cached Functions</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}

type Post = {
  id: number;
  title: string;
  body: string;
};

type PostsResponse = {
  posts: Post[];
};
