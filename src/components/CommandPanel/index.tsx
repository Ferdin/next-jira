export default function CommandPanel() {
  return (
    <div className="bg-white rounded-md flex flex-row h-20  w-full">
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
  );
}
