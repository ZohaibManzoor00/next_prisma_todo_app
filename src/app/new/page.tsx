import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";
import { createTodo } from "../adapters/todos";
import NavLink from "../components/nav-link";

export default function NewTodo() {
  const btnStyle =
    "border border-slate-300 hover:bg-slate-700 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100";

  const createNewTodo = async (data: FormData) => {
    "use server";

    const title = data.get("title")?.valueOf();

    if (typeof title !== "string" || title.length === 0) return "No input";

    await createTodo({ title, completed: false });
    revalidateTag("todo");
    redirect("/todo");
  };

  return (
    <div className="flex gap-2 flex-col justify-center items-center">
      <form action={createNewTodo}>
        <input
          type="text"
          name="title"
          placeholder="What's next?"
          className={btnStyle}
        />
        <label htmlFor="title"></label>
        <div className="flex justify-center gap-2 py-3">
          <NavLink to={"/"} name="Cancel" styles={btnStyle} />
          <button className={btnStyle} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
