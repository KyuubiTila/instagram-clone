import FollowingSVG from '@/components/svgComps/FollowingSVG';
import MoreSVG from '@/components/svgComps/MoreSVG';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Profile = () => {
  return (
    <div className="h-full border-gray-200 border rounded-xl">
      <div className="flex p-4 ">
        <div className="mt-2">
          <Image
            height={200}
            width={200}
            className="border border-gray-400 shadow-xl mx-auto rounded-full "
            src="/x-big.jpg"
            alt="logo"
          />
        </div>

        <div>
          <div className="flex text-left pl-4 justify-between mt-2 ">
            <div className=" flex text-center text-gray-700 text-2xl mr-8 ">
              Tunde
            </div>
            <div className="flex ">
              <button className=" bg-gray-300 mr-2 text-black hover:bg-gray-400 hover:text-white  px-4 border border-gray-400 rounded-xl">
                Edit Profile
              </button>
              <button className=" bg-gray-300 mr-2 text-black hover:bg-gray-400 hover:text-white  px-4 border border-gray-400 rounded-xl">
                Follow
              </button>
              <button className=" bg-gray-300 mr-2 text-black hover:bg-gray-400 hover:text-white  px-4 border border-gray-400 rounded-xl">
                <FollowingSVG />
              </button>
              <button className=" bg-gray-300 mr-2 text-black hover:bg-gray-400 hover:text-white  px-4 border border-gray-400 rounded-xl">
                <MoreSVG />
              </button>
            </div>
          </div>

          <div className="flex w-full text-left pl-4 pt-3">
            <span className="text-base font-semibold text-gray-700 mr-6 ">
              <b>220</b> posts
            </span>
            <span className="text-base font-semibold text-gray-700 mx-6">
              <b>114</b> followers
            </span>
            <span className="text-base font-semibold text-gray-700 mx-6">
              <b>200</b> following
            </span>
          </div>

          <div className="text-left pl-4 pt-3">
            <span className="text-lg font-bold text-gray-700 mr-2">
              kyuubiTila
            </span>
          </div>

          <div className="text-left pl-4 ">
            <p className="text-base font-medium  mr-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              voluptas praesentium
            </p>
            <Link
              href={'https://github.com/KyuubiTila'}
              target="_blank"
              className="text-base font-medium text-blue-700 mr-2 "
            >
              https://github.com/KyuubiTila
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-4 py-2 m-2">
        <div className="text-center ">
          <div className="h-24 w-24 rounded-full overflow-hidden border border-gray-400 shadow-xl mx-auto">
            <Image
              height={34}
              width={34}
              alt={'www'}
              className="w-full h-full"
              src="/x-big.jpg"
            />
          </div>
          <h1 className="pt-2 font-serif font-semibold text-gray-900">Fun</h1>
        </div>

        <div className="text-center ">
          <div className="h-24 w-24 rounded-full overflow-hidden border border-gray-400 shadow-xl mx-auto">
            <Image
              height={34}
              width={34}
              alt={'www'}
              className="w-full h-full"
              src="/x-big.jpg"
            />
          </div>
          <h1 className="pt-2 font-serif font-semibold text-gray-900">
            Travel
          </h1>
        </div>

        <div className="text-center ">
          <div className="h-24 w-24 rounded-full overflow-hidden border border-gray-400 shadow-xl mx-auto">
            <Image
              height={34}
              width={34}
              alt={'www'}
              className="w-full h-full"
              src="/x-big.jpg"
            />
          </div>
          <h1 className="pt-2 font-serif font-semibold text-gray-900">Food</h1>
        </div>

        <div className="text-center ">
          <div className="h-24 w-24 rounded-full overflow-hidden border border-gray-400 shadow-xl mx-auto">
            <Image
              height={34}
              width={34}
              alt={'www'}
              className="w-full h-full"
              src="/x-big.jpg"
            />
          </div>
          <h1 className="pt-2 font-serif font-semibold text-gray-900">
            Sketch
          </h1>
        </div>

        <div className="text-center ">
          <div className="h-24 w-24 rounded-full overflow-hidden border border-gray-400 shadow-xl mx-auto">
            <Image
              height={34}
              width={34}
              alt={'www'}
              className="w-full h-full"
              src="/x-big.jpg"
            />
          </div>
          <h1 className="pt-2 font-serif font-semibold text-gray-900">
            My Work
          </h1>
        </div>
      </div>

      <hr className="border-gray-300 mt-6" />

      <div className="flex w-full justify-center mr-16">
        <div className="flex text-gray-700 text-center py-4 mx-6 ">
          <div className="flex ">
            <button
              className="border-transparent text-gray-800 rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
              aria-label="Notifications"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
          <div className="flex  ml-2 mt-1">
            <h3 className="text-sm font-bold text-gray-800 mr-2">POSTS</h3>
          </div>
        </div>

        <div className="flex text-gray-700 text-center py-4 mx-6">
          <div className="flex ">
            <button
              className="border-transparent text-gray-600 rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
              aria-label="Notifications"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>
          <div className="flex  ml-2 mt-1">
            <h3 className="text-sm font-medium text-gray-700 mr-2">SAVED</h3>
          </div>
        </div>

        <div className="flex text-gray-700 text-center py-4 mx-6">
          <div className="flex ">
            <button
              className="border-transparent text-gray-600 rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
              aria-label="Notifications"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </button>
          </div>
          <div className="flex  ml-2 mt-1">
            <h3 className="text-sm font-medium text-gray-700 mr-2">TAGGED</h3>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="text-center px-1 py-2 ">
          <Image
            height={200}
            width={200}
            alt={'www'}
            className="w-full border"
            src="/x-big.jpg"
          />
        </div>
        <div className="text-center px-1 py-2">
          <Image
            height={200}
            width={200}
            alt={'www'}
            className="w-full border"
            src="/x-big.jpg"
          />
        </div>
        <div className="text-center px-1 py-2">
          <Image
            height={200}
            width={200}
            alt={'www'}
            className="w-full border"
            src="/x-big.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
