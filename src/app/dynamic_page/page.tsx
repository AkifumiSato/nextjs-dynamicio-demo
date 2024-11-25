import { Suspense } from "react";

export default function DynamicPage() {
  return (
    <main>
      <h1>Dynamic Page</h1>
      <Suspense fallback={<>Loading...</>}>
        <RandomTodo />
      </Suspense>
    </main>
  );
}

async function RandomTodo() {
  console.log("DynamicPage render");

  const res = await fetch("https://dummyjson.com/todos/random");
  const todo = (await res.json()) as Todo;

  return (
    <pre>
      <code>{JSON.stringify(todo, null, 2)}</code>
    </pre>
  );
}

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};
