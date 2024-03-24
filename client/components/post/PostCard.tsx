'use client';
import React from 'react';
import BookmarkSVG from '../svgComps/BookmarkSVG';
import CommentModal from '../modals/CommentModal';
import ShareSVG from '../svgComps/ShareSVG';
import CommentSVG from '../svgComps/CommentSVG';
import LoveSVG from '../svgComps/LoveSVG';
import { Avatar } from '@mui/material';
import EmojiSVG from '../svgComps/EmojiSVG';
import Image from 'next/image';
import SendSVG from '../svgComps/SendSVG';

const PostCard = () => {
  const openCommentModal = () => {
    const modalCheckbox = document.getElementById(
      'comment-modal'
    ) as HTMLInputElement;
    if (modalCheckbox) {
      modalCheckbox.checked = !modalCheckbox.checked;
    }
  };
  return (
    <div className="flex justify-center p-4">
      <CommentModal />
      <div className="bg-white border rounded-xl max-w-md">
        {/* Card header  */}
        <div className="flex items-center px-4 py-3">
          <Image
            width={18}
            height={18}
            alt={'dp'}
            src="/x-big.jpg"
            className="h-8 w-8 rounded-full border border-gray-400"
          />

          <div className="ml-3 ">
            <span className="text-sm font-semibold antialiased block leading-tight">
              8fact
            </span>
            <span className="text-gray-600 text-xs block">
              Asheville, North Carolina
            </span>
          </div>
        </div>
        {/* Card image */}
        <img src="https://picsum.photos/id/244/900/900" />
        {/* Card Engagement bar */}
        <div className="flex items-center justify-between mx-4 my-2">
          <div className="flex gap-5">
            <div className="flex tooltip tooltip-bottom" data-tip="like">
              <LoveSVG />
            </div>
            <div
              className="flex tooltip tooltip-bottom"
              data-tip="comment"
              onClick={openCommentModal}
            >
              <CommentSVG />
            </div>
            <div className="flex tooltip tooltip-bottom" data-tip="share">
              <ShareSVG />
            </div>
          </div>
          <div className="flex tooltip tooltip-bottom" data-tip="Bookmark">
            <BookmarkSVG />
          </div>
        </div>
        {/* Liked by bar */}
        <div className="flex items-center mx-4 space-x-2">
          <div className="flex -space-x-1">
            <Avatar
              src="/x-big.jpg"
              className="w-5 h-5 border rounded-full bg-coolGray-500 border-coolGray-800  border-gray-400"
            />
            <Avatar
              src="/x-big.jpg"
              className="w-5 h-5 border rounded-full bg-coolGray-500 border-coolGray-800  border-gray-400"
            />
            <Avatar
              src="/x-big.jpg"
              className="w-5 h-5 border rounded-full bg-coolGray-500 border-coolGray-800  border-gray-400"
            />
          </div>
          <span className="text-sm">
            {' '}
            Liked by
            <span className="font-semibold"> Pixels</span> and
            <span className="font-semibold"> 20 others</span>
          </span>
        </div>
        {/* Comment Bar */}
        <div className="flex flex-wrap items-center font-semibold text-sm mx-4 mb-2">
          <div className=" w-full  mt-1">
            <p className="text-sm">
              <span className="text-base font-semibold mr-1">External_ </span>{' '}
              It's getting cold out there!
            </p>
            <p className="text-sm">
              <span className="text-base font-semibold mr-1">Prime </span> It's
              getting too hot out there!
            </p>
            <div
              className="text-sm text-gray-400 mt-1 cursor-pointer font-medium"
              onClick={openCommentModal}
            >
              View all 14 comments
            </div>
          </div>
          <div className="flex w-full mt-2 relative">
            <button
              type="submit"
              className="absolute left-1 top-1/2 transform -translate-y-1/2 border-none focus:outline-none"
            >
              <EmojiSVG />
            </button>
            <input
              type="text"
              className="textarea textarea-bordered w-full px-8"
              placeholder="Add comment"
            />
            <button
              type="submit"
              className="absolute right-2 text-black top-1/2 transform -translate-y-1/2 border-none focus:outline-none pr-4 pb-3"
            >
              <div className="w-2 h-2">
                <SendSVG />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
