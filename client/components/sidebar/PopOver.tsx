import React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import MoreSVG from '../svgComps/MoreSVG';
import ReportProblemSVG from '../svgComps/ReportProblemSVG';
import SunSVG from '../svgComps/SunSVG';
import BookmarkSVG from '../svgComps/BookmarkSVG';
import ActivitySVG from '../svgComps/ActivitySVG';
import SettingSVG from '../svgComps/SettingSVG';
import Link from 'next/link';

const PopOver = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <div aria-describedby={id} onClick={handleClick}>
        <div className="font-serif  mt-1 flex gap-5 text-black w-full items-center px-4 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
          <MoreSVG />
          <p className="hidden md:inline-flex ">More</p>
        </div>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
          '& .MuiPopover-paper': {
            width: '250px',
            padding: '10px',
            borderRadius: '20px',
          },
        }}
      >
        <Typography
          className="hover:cursor-pointer p-4  font-serif mt-2 text-black px-4 hover:bg-gray-100 rounded-lg "
          sx={{ p: 2 }}
        >
          <div className="flex gap-5">
            <SettingSVG />
            <p>Settings</p>
          </div>
        </Typography>
        <Typography
          className="hover:cursor-pointer p-4  font-serif  text-black px-4 hover:bg-gray-100 rounded-lg "
          sx={{ p: 2 }}
        >
          <div className="flex gap-5">
            <ActivitySVG />
            <p>Your activity</p>
          </div>
        </Typography>
        <Typography
          className="hover:cursor-pointer p-4  font-serif  text-black px-4 hover:bg-gray-100 rounded-lg "
          sx={{ p: 2 }}
        >
          <div className="flex gap-5">
            <BookmarkSVG />
            <p>Saved</p>
          </div>
        </Typography>
        <Typography
          className="hover:cursor-pointer p-4  font-serif  text-black px-4 hover:bg-gray-100 rounded-lg "
          sx={{ p: 2 }}
        >
          <div className="flex gap-5">
            <SunSVG />
            <p>Switch appearance</p>
          </div>
        </Typography>
        <Typography
          className="hover:cursor-pointer p-4 font-serif  text-black px-4 hover:bg-gray-100 rounded-lg mb-2"
          sx={{ p: 2 }}
        >
          <div className="flex gap-5">
            <ReportProblemSVG />
            <p>Report a problem</p>
          </div>
        </Typography>
        <hr className="border-b-4  border-gray-100" />
        <Typography
          className="hover:cursor-pointer p-4  font-serif mt-2 text-black px-4 hover:bg-gray-100 rounded-lg mb-2"
          sx={{ p: 2 }}
        >
          Switch accounts
        </Typography>
        <hr className="border-gray-100" />
        <Link href="/signin">
          <Typography
            className="hover:cursor-pointer p-4  font-serif mt-2 text-black px-4 hover:bg-gray-100 rounded-lg"
            sx={{ p: 2 }}
          >
            Logout
          </Typography>
        </Link>
      </Popover>
    </>
  );
};

export default PopOver;
