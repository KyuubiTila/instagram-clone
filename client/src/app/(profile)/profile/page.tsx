'use client';
import ProfileMore from '@/components/modals/ProfileMore';
import StoryModal from '@/components/modals/StoryModal';
import FollowingSVG from '@/components/svgComps/FollowingSVG';
import LinkSVG from '@/components/svgComps/LinkSVG';
import MoreSVG from '@/components/svgComps/MoreSVG';
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import IndividualPostCard from '@/components/post/IndividualPostCard';

const Profile = () => {
  const openStoryModal = () => {
    const modalCheckbox = document.getElementById(
      'my_modal_8'
    ) as HTMLInputElement;
    if (modalCheckbox) {
      modalCheckbox.checked = !modalCheckbox.checked;
    }
  };

  return (
    <div className="h-full border-gray-200 lg:mx-24">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between ">
        <div className="flex-shrink-0 w-full lg:w-1/4 mt-2 lg:mt-0">
          <Image
            height={200}
            width={200}
            className="border border-gray-400 shadow-xl mx-auto rounded-full "
            src="/x-big.jpg"
            alt="logo"
          />
        </div>

        <div className="w-full lg:ml-12 ">
          <div className=" flex text-left pl-4 items-center justify-between mt-2 ">
            <div className=" flex text-center text-gray-700 text-2xl mr-8 ">
              Tunde
            </div>
            <div className="flex justify-center items-center ">
              <Link href="/profile/edit-profile">
                <div className="flex items-center bg-gray-300 mr-2 text-black hover:cursor-pointer hover:bg-gray-400 hover:text-white px-4 border border-gray-400 rounded-lg">
                  <span className="overflow-hidden whitespace-nowrap">
                    Edit Profile
                  </span>
                </div>
              </Link>
              <div className="flex h-7 items-center bg-gray-300 mr-2 text-black hover:cursor-pointer hover:bg-gray-400 hover:text-white  px-4 border border-gray-400 rounded-lg">
                Message
              </div>
              <div className="flex h-7 items-center bg-gray-300 mr-2 text-black hover:cursor-pointer hover:bg-gray-400 hover:text-white  px-4 border border-gray-400 rounded-lg">
                <FollowingSVG />
              </div>
              <label
                htmlFor="my_modal_7"
                className="flex h-7 items-center bg-gray-300 mr-2 text-black hover:cursor-pointer hover:bg-gray-400 hover:text-white  px-4 border border-gray-400 rounded-lg"
              >
                <MoreSVG />
              </label>

              <ProfileMore />
              <StoryModal />
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

          <div className="text-left pl-4 my-1">
            <span className="text-lg font-bold text-gray-700 mr-2">
              kyuubiTila
            </span>
          </div>

          <div className="text-left pl-4 ">
            <p className="text-base font-medium my-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              voluptas praesentium
            </p>
            <div className="flex items-center">
              <LinkSVG />
              <Link
                href={'https://github.com/KyuubiTila'}
                target="_blank"
                className="text-base font-medium text-blue-700 ml-2 "
              >
                https://github.com/KyuubiTila
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-4 py-2 m-2">
        <div
          className="text-center hover:cursor-pointer"
          onClick={openStoryModal}
        >
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

        <div
          className="text-center hover:cursor-pointer "
          onClick={openStoryModal}
        >
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

        <div
          className="text-center hover:cursor-pointer "
          onClick={openStoryModal}
        >
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

        <div
          className="text-center hover:cursor-pointer "
          onClick={openStoryModal}
        >
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

        <div
          className="text-center hover:cursor-pointer "
          onClick={openStoryModal}
        >
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

      <div className="flex w-full items-center justify-center mr-16">
        <div className="flex items-center text-gray-700 text-center py-4 mx-6 ">
          <Button
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
          </Button>
          <div className="flex  ml-2 mt-1">
            <h3 className="text-sm font-bold text-gray-800 mr-2">POSTS</h3>
          </div>
        </div>

        <div className="flex items-center text-gray-700 text-center py-4 mx-6">
          <Button
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
          </Button>
          <div className="flex  ml-2 mt-1">
            <h3 className="text-sm font-medium text-gray-700 mr-2">SAVED</h3>
          </div>
        </div>

        <div className="flex items-center text-gray-700 text-center py-4 mx-6">
          <Button
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
          </Button>
          <div className="flex  ml-2 mt-1">
            <h3 className="text-sm font-medium text-gray-700 mr-2">TAGGED</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <IndividualPostCard />
        <IndividualPostCard />
        <IndividualPostCard />
        <IndividualPostCard />
        <IndividualPostCard />
        <IndividualPostCard />
      </div>
    </div>
  );
};

export default Profile;
