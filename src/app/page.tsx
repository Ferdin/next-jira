import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Home() {
  return (
    <div className="p-6 flex w-full">
      <div className="bg-white rounded-md flex flex-col w-1/5 h-screen space-y-2 drop-shadow-md">
        <div>
          <Image
            src={logo}
            alt="n-jira company logo"
            className="w-24 mr-auto ml-auto"
          />
        </div>
        <div className="p-4 hover:bg-gradient-to-r from-white to-blue-300 hover:border-r-4 border-r-blue-950 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 stroke-black stroke-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <a className="uppercase tracking-wide font-bold">Dashboard</a>
        </div>
        <div className="p-4 hover:bg-gradient-to-r from-white to-blue-300 hover:border-r-4 border-r-blue-950 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>

          <a className="uppercase tracking-wide font-bold">Profile</a>
        </div>
        <div className="p-4 hover:bg-gradient-to-r from-white to-blue-300 hover:border-r-4 border-r-blue-950 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <a className="uppercase tracking-wide font-bold">Settings</a>
        </div>
        <div className="p-4 hover:bg-gradient-to-r from-white to-blue-300 hover:border-r-4 border-r-blue-950 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
            />
          </svg>

          <a className="uppercase tracking-wide font-bold">Reports</a>
        </div>
        <div className="p-4 hover:bg-gradient-to-r from-white to-blue-300 hover:border-r-4 border-r-blue-950 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
            />
          </svg>

          <a className="uppercase tracking-wide font-bold">Logout</a>
        </div>
      </div>
      <div className="w-4/5 drop-shadow-md mr-6">
        <div className="bg-white rounded-md flex flex-row h-20 ml-6 w-full">
          <div className="relative flex-grow ml-2">
            <input
              type="text"
              className="bg-slate-50 ml-2 pt-4 pb-4 pl-8 mt-3 w-64 rounded-md"
              placeholder="Search..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 size-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <div className="flex flex-row mt-auto mb-auto mr-4 gap-2 bg-black p-3 rounded-md">
            <span className=" mt-auto mb-auto text-white">Create a ticket</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 mt-auto mb-auto stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-row ml-6 w-full mt-6 gap-6">
          <div className="w-1/3 flex flex-col">
            <h2 className="font-bold text-2xl">To Do</h2>
            <div className="mt-6 rounded-md flex flex-col gap-4">
              <div className="h-auto bg-white rounded-md p-4">
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia quos temporibus obcaecati nostrum. Neque aperiam
                    culpa quia nobis, nesciunt, sequi dolorum dolorem porro
                    asperiores reiciendis maiores recusandae dicta at delectus.
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
                  <span className="p-2  bg-amber-200 text-amber-600 rounded-md ">
                    High Priority
                  </span>
                  <p className=" text-gray-600 mt-4 mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia quos temporibus obcaecati nostrum. Neque aperiam
                    culpa quia nobis, nesciunt, sequi dolorum dolorem porro
                    asperiores reiciendis maiores recusandae dicta at delectus.
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
          </div>
          <div className="w-1/3 flex flex-col">
            <h2 className="font-bold text-2xl">In Progress</h2>
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
          </div>
          <div className="w-1/3 flex flex-col">
            <h2 className="font-bold text-2xl">Completed</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
}
