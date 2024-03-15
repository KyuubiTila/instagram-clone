import React from 'react';

function StoryBoard() {
  return (
    <div className="flex max-w-full justify-center  mx-auto p-8">
      <ul className="flex space-x-6 font-serif ">
        <li className="flex flex-col items-center space-y-1 relative">
          <div className="bg-gradient-to-tr from-yellow-300 to-fuchsia-800 p-1 rounded-full">
            <a
              className=" bg-white block rounded-full p-1 hover:-rotate-6 transform transition"
              href="#"
            >
              <img
                className="h-16 w-16 rounded-full"
                src="http://placekitten.com/200/300"
                alt="cute kitty"
              />
            </a>
          </div>
          <button className="absolute bottom-6 right-2 bg-purple-800 rounded-full h-6 w-6 text-2xl text-white font-semibold border-2 border-white flex justify-center items-center font-mono hover:bg-blue-700">
            +
          </button>
          <a href="#">you</a>
        </li>

        <li className="flex flex-col items-center space-y-1 ">
          <div className="bg-gradient-to-tr from-yellow-500 to-fuchsia-600 p-1 rounded-full">
            <a
              className=" bg-white block rounded-full p-1 hover:-rotate-6 transform transition"
              href="#"
            >
              <img
                className="h-16 w-16 rounded-full"
                src="http://placekitten.com/200/300"
                alt="cute kitty"
              />
            </a>
          </div>
          <a href="#">Ayobami</a>
        </li>

        <li className="flex flex-col items-center space-y-1 ">
          <div className="bg-gradient-to-tr from-yellow-500 to-fuchsia-600 p-1 rounded-full">
            <a
              className=" bg-white block rounded-full p-1 hover:-rotate-6 transform transition"
              href="#"
            >
              <img
                className="h-16 w-16 rounded-full"
                src="http://placekitten.com/200/300"
                alt="cute kitty"
              />
            </a>
          </div>
          <a href="#">Sarah</a>
        </li>
        <li className="flex flex-col items-center space-y-1 ">
          <div className="bg-gradient-to-tr from-yellow-500 to-fuchsia-600 p-1 rounded-full">
            <a
              className=" bg-white block rounded-full p-1 hover:-rotate-6 transform transition"
              href="#"
            >
              <img
                className="h-16 w-16 rounded-full"
                src="http://placekitten.com/200/300"
                alt="cute kitty"
              />
            </a>
          </div>
          <a href="#">Pelumi</a>
        </li>
      </ul>
    </div>
  );
}

export default StoryBoard;
