import {
  unstable_cacheLife as cacheLife,
  unstable_cacheTag as cacheTag,
} from "next/cache";

export default async function CachedFunctionsPage() {
  console.log("CachedFunctionsPage render");

  const todo = await getTodo();

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

async function getTodo() {
  "use cache";

  cacheTag("cached_func_tag");
  cacheLife("minutes");

  console.log("getTodo executed");

  const res = await fetch("https://dummyjson.com/todos/random");
  return (await res.json()) as Todo;
}

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};
