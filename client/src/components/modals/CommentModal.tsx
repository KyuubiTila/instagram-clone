import React from 'react';
import EmojiSVG from '../svgComps/EmojiSVG';
import BookmarkSVG from '../svgComps/BookmarkSVG';
import ShareSVG from '../svgComps/ShareSVG';
import CommentSVG from '../svgComps/CommentSVG';
import LoveSVG from '../svgComps/LoveSVG';
import TinyLoveSVG from '../svgComps/TinyLoveSVG';
import Image from 'next/image';
import { Avatar } from '@mui/material';
import SendSVG from '../svgComps/SendSVG';

const CommentModal = () => {
  return (
    <>
      <input type="checkbox" id="comment-modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box max-w-[1200px]  p-0">
          <div className="max-w-[1200px] mx-auto shadow-lg border border-gray-200 rounded-lg relative">
            <div className="sm:flex">
              <div className="sm:w-1/2 w-full">
                <Image
                  width={1024}
                  height={1024}
                  src="/x-big.jpg"
                  alt="Album"
                />
              </div>

              <div className=" hidden sm:block absolute inset-y-0 left-1/2 w-px bg-gray-300" />
              <div className="flex p-4 sm:w-1/2 flex-col  ">
                <div className="flex items-center py-3">
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

                <div className="mt-2">
                  <div className="flex my-1 text-sm justify-between items-center">
                    <div className="flex">
                      <span className="text-base font-semibold mr-2">
                        External_
                      </span>
                      <p>It's getting cold out there!</p>
                    </div>
                    <TinyLoveSVG />
                  </div>
                  <div className="flex my-1 text-sm justify-between items-center">
                    <div className="flex">
                      <span className="text-base font-semibold mr-2">
                        Internal_
                      </span>
                      <p>It's quite hot in there!</p>
                    </div>
                    <TinyLoveSVG />
                  </div>
                  <div className="flex my-1 text-sm justify-between items-center">
                    <div className="flex">
                      <span className="text-base font-semibold mr-2">
                        Player12
                      </span>
                      <p>It is game day everyone!</p>
                    </div>
                    <TinyLoveSVG />
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex  justify-between mt-3 mb-2">
                    <div className="flex gap-5">
                      <div
                        className="flex tooltip tooltip-bottom"
                        data-tip="like"
                      >
                        <LoveSVG />
                      </div>
                      <div
                        className="flex tooltip tooltip-bottom"
                        data-tip="comment"
                      >
                        <CommentSVG />
                      </div>
                      <div
                        className="flex tooltip tooltip-bottom"
                        data-tip="share"
                      >
                        <ShareSVG />
                      </div>
                    </div>
                    <div
                      className="flex tooltip tooltip-bottom"
                      data-tip="Bookmark"
                    >
                      <BookmarkSVG />
                    </div>
                  </div>
                  <div className="flex flex-col font-semibold text-sm  ">
                    <div className="flex items-center my-1 space-x-2">
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
            </div>
          </div>
        </div>

        <label className="modal-backdrop" htmlFor="comment-modal">
          Close
        </label>
      </div>
    </>
  );
};

export default CommentModal;
