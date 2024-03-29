'use client';
import React from 'react';
import InstagramSVG from '../svgComps/InstagramSVG';
import MenuItem from './MenuItem';
import HomeSVG from '../svgComps/HomeSVG';
import SearchBtnSVG from '../svgComps/SearchBtnSVG';
import ExploreSVG from '../svgComps/ExploreSVG';
import ReelSVG from '../svgComps/ReelSVG';
import Messenger from '../svgComps/Messenger';
import HeartSVG from '../svgComps/HeartSVG';
import NewPostSVG from '../svgComps/NewPostSVG';
import ProfilePicSVG from '../svgComps/ProfilePicSVG';
import ThreadSVG from '../svgComps/ThreadSVG';
import Link from 'next/link';
import PopOver from './PopOver';

interface MenuItemData {
  icon: React.ComponentType<any>;
  label: string;
  href: string;
}

export function SideBar(): JSX.Element {
  const topMenuItems: MenuItemData[] = [
    {
      icon: HomeSVG,
      label: 'Home',
      href: '/',
    },
    {
      icon: SearchBtnSVG,
      label: 'Search',
      href: '/',
    },
    {
      icon: ExploreSVG,
      label: 'Explore',
      href: '/',
    },
    {
      icon: ReelSVG,
      label: 'Reel',
      href: '/',
    },
    {
      icon: Messenger,
      label: 'Message',
      href: '/',
    },
    {
      icon: HeartSVG,
      label: 'Notification',
      href: '/',
    },
    {
      icon: NewPostSVG,
      label: 'Create',
      href: '/',
    },
    {
      icon: ProfilePicSVG,
      label: 'Profile',
      href: '/profile',
    },
  ];

  return (
    <div className="flex h-screen w-auto md:w-60 p-4 md:shadow-xl flex-col justify-between">
      <div className="mt-4">
        <Link href="/">
          <div className="cursor-pointer select-none">
            <InstagramSVG disableDarkMode={false} white={false} />
          </div>
        </Link>
        <div className="flex  relative">
          <div className="flex flex-col">
            {topMenuItems.map((item) => (
              <MenuItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex  relative ">
        <div className="flex flex-col">
          <div className="font-serif  mt-1 flex gap-5 text-black w-full items-center px-4 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
            <ThreadSVG />
            <p className="hidden md:inline-flex ">Threads</p>
          </div>
          <PopOver />
        </div>
      </div>
    </div>
  );
}
