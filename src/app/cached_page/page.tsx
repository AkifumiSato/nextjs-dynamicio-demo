"use cache";

import {
  unstable_cacheLife as cacheLife,
  unstable_cacheTag as cacheTag,
} from "next/cache";

export default async function CachedPage() {
  console.log("CachedPage render");

  cacheTag("cached_page_tag");
  cacheLife("minutes");

  const res = await fetch("https://dummyjson.com/todos/random");
  const todo = (await res.json()) as Todo;

  return (
    <div>
      <main>
        <h1>Cached Page - Post List</h1>
        <pre>
          <code>{JSON.stringify(todo, null, 2)}</code>
        </pre>
      </main>
    </div>
  );
}

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};
