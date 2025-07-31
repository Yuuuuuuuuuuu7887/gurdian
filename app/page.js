import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F1F1F1] flex flex-col items-center p-4 ">
      {/* Header Card */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[167px] sm:h-[180px] md:h-[200px] lg:h-[220px] xl:h-[240px] glassBox rounded-2xl p-4 shadow-lg mt-40">
        <div className="flex items-center justify-between">
          <span className="text-red-600 font-bold text-lg">True Guardian</span>
          {/* <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
            </svg>
          </div> */}
        </div>
      </div>

      {/* Menu Flex Wrap */}
      <div
        className="flex flex-wrap gap-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mt-6 justify-center"
      >
        <div
          className="flex-shrink-0 w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(33%-0.67rem)] lg:w-[calc(25%-0.75rem)]
                     h-[167px] sm:h-[180px] md:h-[200px] p-6 rounded-xl
                     flex flex-col items-center justify-center shadow-lg cursor-pointer glassBox"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="red"
            className="w-8 h-8 mb-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h.01M15 12h.01" />
          </svg>
          <span className="text-red-600 font-semibold">Chat</span>
        </div>

        <div
          className="flex-shrink-0 w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(33%-0.67rem)] lg:w-[calc(25%-0.75rem)]
                     h-[167px] sm:h-[180px] md:h-[200px] p-6 rounded-xl
                     flex flex-col items-center justify-center shadow-lg cursor-pointer glassBox"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="red"
            className="w-8 h-8 mb-2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span className="text-red-600 font-semibold">Browser</span>
        </div>

        <div
          className="flex-shrink-0 w-full md:w-[calc(50%-0.67rem)] lg:w-[calc(50%-0.75rem)]
                     h-[167px] sm:h-[180px] md:h-[200px] p-6 rounded-xl
                     flex flex-col items-center justify-center shadow-lg cursor-pointer glassBox"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="red"
            className="w-8 h-8 mb-2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
          </svg>
          <span className="text-red-600 font-semibold">True Money</span>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div
        className="fixed bottom-4 mb-6 flex items-center justify-around glassBox w-11/12 max-w-md p-3 rounded-2xl shadow-lg"
      >
        <button className="text-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            viewBox="0 0 24 24"
          >
            <path d="M3 9.5L12 3l9 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 20.5z" />
            <path d="M9 21V12h6v9" />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            viewBox="0 0 24 24"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
          </svg>
        </button>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            viewBox="0 0 24 24"
          >
            <path d="M21 7v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7" />
            <path d="M16 12h.01" />
            <path d="M3 7h18v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
