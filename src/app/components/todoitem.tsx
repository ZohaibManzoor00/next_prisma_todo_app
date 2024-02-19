"use client";

import { useState } from "react";
import { TodoProps } from "../types/todoTypes";
import ErrorBoundary from "../error";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import { toast } from "react-hot-toast";
import { DateTime } from "luxon";

export default function TodoItem({
  id,
  title,
  completed,
  toggleTodoCompleted,
  deleteATodo,
  createdAt,
}: TodoProps) {
  const [error, setError] = useState("");

  const handleDeleteBtn = async () => {
    const res = await deleteATodo(id);
    if (res?.error) {
      toast.error(String(res.error));
      setError(String(res.error));
      return;
    }
    toast("Keep it up!", {
      duration: 1500,
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <div className="py-2 grid place-content-center">
      <Card className="w-[210px] dark dark-text p-1">
        <CardHeader className="justify-between">
          <div className="flex gap-5"></div>
          <Button
            color="primary"
            radius="full"
            size="sm"
            variant={completed ? "ghost" : "solid"}
            onPress={() => toggleTodoCompleted(id, !completed)}
          >
            {completed ? "Complete" : "Completed"}
          </Button>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-600">
          <p>{title}</p>
        </CardBody>
        <CardFooter className="gap-3 flex items-center justify-between">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">4</p>
            <p className=" text-default-400 text-small">Hours ago</p>
          </div>

          {error ? (
            <ErrorBoundary error={error} retry={handleDeleteBtn} />
          ) : (
            <Button
              color="danger"
              radius="full"
              size="sm"
              variant="ghost"
              onPress={handleDeleteBtn}
            >
              Delete
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );

  // return (
  // <li className="py-2 list-none flex justify-end gap-2">
  //   <label
  //     htmlFor={id}
  //     className="text-center peer-checked:line-through cursor-pointer peer-checked:text-slate-500 text-lg"
  //   >
  //     {title}
  //   </label>
  //   <div className="flex gap-1">
  //     <input
  //       id={id}
  //       type="checkbox"
  //       className="cursor-pointer pee"
  //       defaultChecked={completed}
  //       onChange={handleCheckbox}
  //     />
  //     <button
  //       className="pr-2 font-bold hover:text-red-400 text-red-500"
  //       onClick={handleDeleteBtn}
  //     >
  //       Delete
  //     </button>

  //   </div>
  // </li>
  // );
}
