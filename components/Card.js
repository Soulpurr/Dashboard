import React from "react";

function Card({color,text,tag}) {
  
  return (
    <div className="bg-[#211A75] p-4 rounded-lg shadow-lg w-full cursor-pointer ">
      <div className="flex flex-col justify-between items-center mb-4">
        <div className="flex justify-between items-center w-full ">
          <div className="flex items-center">
            <div className={`w-4 h-4 bg-[${color}] rounded-full mx-1`} style={{backgroundColor:color}}></div>
            <p className=" font-semibold text-yellow-500 text-sm">{tag}</p>
          </div>
          <div className="">
            <p className="text-white font-semibold"> &bull; &bull; &bull;</p>
          </div>
        </div>
        <div className="text-white text-sm mt-4 text-center">
          {text}
        </div>
        <div className="w-[90%] h-2 bg-[#1E1C3A] rounded-full mt-4">
          <div className="w-1/4 h-full bg-yellow-500 rounded-full" style={{backgroundColor:color}}></div>
        </div>
        <div className="flex justify-between items-center w-full mt-4">
          <div className="">
            <svg
              width="111"
              height="36"
              viewBox="0 0 111 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="92.9999"
                cy="18"
                r="17"
                fill="#C4C4C4"
                stroke="#211A75"
                strokeWidth="2"
              />
              <circle
                cx="67.9999"
                cy="18"
                r="17"
                fill="#C4C4C4"
                stroke="#211A75"
                strokeWidth="2"
              />
              <circle
                cx="42.9999"
                cy="18"
                r="17"
                fill="#C4C4C4"
                stroke="#211A75"
                strokeWidth="2"
              />
              <circle
                cx="17.9999"
                cy="18"
                r="17"
                fill="#C4C4C4"
                stroke="#211A75"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="flex items-center">
            <div className="">
              <svg
                width="24"
                height="17"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="30"
                  stroke="#A5A5A5"
                  strokeWidth="4"
                  fill="transparent"
                />

                <line
                  x1="32"
                  y1="32"
                  x2="32"
                  y2="20"
                  stroke="#A5A5A5"
                  strokeWidth="4"
                />

                <line
                  x1="32"
                  y1="32"
                  x2="44"
                  y2="32"
                  stroke="#A5A5A5"
                  strokeWidth="4"
                />

                <circle cx="32" cy="32" r="2" fill="#A5A5A5" />
              </svg>
            </div>
            <div className="text-white text-sm">Due in 4 days</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
