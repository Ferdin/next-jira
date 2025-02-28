"use client";

import { Progress } from "@heroui/react";
import { useState } from "react";

interface TaskBoardProps {
  taskType: string;
}

export default function TaskBoard({ taskType }: TaskBoardProps) {
  const [isEmpty] = useState<boolean>(false);

  if (!isEmpty) {
    return (
      <>
        <h2 className="font-bold text-2xl">{taskType}</h2>
        <div className="mt-6 rounded-md flex flex-col gap-4">
          <div className="h-auto bg-white hover:bg-gray-100 rounded-md p-4">
            <div className="flex flex-row items-center w-full mb-4">
              <h2 className=" font-semibold">Ticket title</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FBBF24"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 ml-auto rounded-full p-1 stroke-amber-400 border border-amber-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </div>
            <hr />
            <div className="mt-6">
              <span className="p-2 border border-gray-300 bg-white text-gray-500 rounded-md ">
                Low Priority
              </span>
              <p className=" text-gray-600 mt-4 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                quos temporibus obcaecati nostrum.
              </p>
              <Progress
                aria-label="Loading..."
                className="max-w-md"
                value={0}
              />
            </div>
            <div className="flex flex-row gap-2 mt-6">
              <span className="bg-orange-100 p-2 rounded-sm text-orange-600 ">
                tag name
              </span>
              <span className="bg-orange-100 p-2 rounded-sm text-orange-600 ">
                tag name 2
              </span>
            </div>
          </div>
          <div className="h-auto bg-white rounded-md p-4">
            <div className="flex flex-row items-center w-full mb-4">
              <h2 className=" font-semibold">Ticket title 2</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#9ca3af"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 ml-auto rounded-full p-1 stroke-gray-400 border border-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </div>
            <hr />
            <div className="mt-6">
              <span className="p-2  bg-red-200 text-red-600 rounded-md ">
                High Priority
              </span>
              <p className=" text-gray-600 mt-4 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                quos temporibus obcaecati nostrum. Neque aperiam culpa quia
                nobis, nesciunt, sequi dolorum dolorem porro asperiores
                reiciendis maiores recusandae dicta at delectus.
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <span className="bg-orange-100 p-2 rounded-sm text-orange-600 ">
                tag name
              </span>
              <span className="bg-orange-100 p-2 rounded-sm text-orange-600 ">
                tag name 2
              </span>
            </div>
          </div>
          <div className="h-auto bg-white rounded-md p-4">
            <div className="flex flex-row items-center w-full mb-4">
              <h2 className=" font-semibold">Ticket title 3</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#9ca3af"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 ml-auto rounded-full p-1 stroke-gray-400 border border-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </div>
            <hr />
            <div className="mt-6">
              <span className="p-2  bg-blue-200 text-blue-600 rounded-md ">
                Medium Priority
              </span>
              <p className=" text-gray-600 mt-4 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                quos temporibus obcaecati nostrum. Neque aperiam culpa quia
                nobis, nesciunt, sequi dolorum dolorem porro asperiores
                reiciendis maiores recusandae dicta at delectus.
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <span className="bg-orange-100 p-2 rounded-sm text-orange-600 ">
                tag name
              </span>
              <span className="bg-orange-100 p-2 rounded-sm text-orange-600 ">
                tag name 2
              </span>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2 className="font-bold text-2xl">{taskType}</h2>
        <div className="h-96 border-black border border-dashed mt-6 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 mt-44 ml-auto mr-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </div>
      </>
    );
  }
}
