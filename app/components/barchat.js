const barchat = () => {
  return (
    <div className="">
      <div className="bg-white fixed top-0 left-0 w-full h-[86px] text-2xl border-b-[1px] border-[#D4D4D4] flex items-center  p-4 sm:p-2 md:p-4 lg:p-6">
        <div className="ml-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 10L13 19L14.4 17.5L7 10L14.4 2.5L13 1L4 10Z"
              fill="#8D8B8B"
            />
          </svg>
        </div>
        <div className="flex-grow text-center">
            CHAT 1
        </div>
        <div className="flex-shrink-0 w-[24px] ml-4"></div>
      </div>
    </div>
  );
};
export default barchat;
