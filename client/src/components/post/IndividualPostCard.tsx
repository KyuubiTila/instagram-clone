'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import FilledHeartSVG from '../svgComps/FilledHeartSVG';
import FilledCommentSVG from '../svgComps/FilledCommentSVG';
import CommentModal from '../modals/CommentModal';

const IndividualPostCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const openCommentModal = () => {
    const modalCheckbox = document.getElementById(
      'comment-modal'
    ) as HTMLInputElement;
    if (modalCheckbox) {
      modalCheckbox.checked = !modalCheckbox.checked;
    }
  };
  return (
    <div
      className="text-center   py-2 relative border hover:cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        height={200}
        width={200}
        alt={'www'}
        className="w-full "
        src="/x-big.jpg"
      />
      {isHovered && (
        <div
          className="absolute inset-0 bg-gray-500 bg-opacity-20 flex justify-center items-center"
          onClick={openCommentModal}
        >
          <div className="max-w-full mx-auto bg-transparent flex flex-col lg:flex-row items-center justify-center">
            <div className="flex items-center text-white text-xl font-bold mb-4 lg:mb-0">
              <FilledHeartSVG />
              <span className="ml-2">1,200</span>
            </div>
            <div className="flex items-center text-white text-xl font-bold ml-0 lg:ml-4">
              <FilledCommentSVG />
              <span className="ml-2">1,200</span>
            </div>
          </div>
        </div>
      )}
      <CommentModal />
    </div>
  );
};

export default IndividualPostCard;
