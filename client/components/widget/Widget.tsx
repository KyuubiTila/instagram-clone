'use client';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import WidgetProfile from './WidgetProfile';

interface User {
  login: {
    uuid: string;
    username: string;
  };
  name: {
    first: string;
  };
  picture: {
    large: string;
  };
}

const Widgets = (): JSX.Element => {
  const [whoToFollow, setWhoToFollow] = useState<User[]>([]);
  const [randomUserNumber, setRandomUserNumber] = useState<number>(3);

  useEffect(() => {
    async function getWhoToFollow() {
      const res = await fetch(
        'https://randomuser.me/api/?results=25&inc=name,login,picture'
      );
      const data = await res.json();
      setWhoToFollow(data.results);
    }

    getWhoToFollow();
  }, []);

  return (
    <div className="text-white mt-1 flex flex-col ml-2 mr-4 border-b-gray w-full">
      <WidgetProfile />
      <div className="mt-8 flex flex-col gap-2 bg-white top-16">
        <div className="flex justify-between items-center">
          <h2 className=" text-black text-lg font-semibold p-2">
            Suggested for you
          </h2>
          <Button
            className="text-black text-xs h-8 bg-gray-300 ml-auto hover:bg-gray-400 hover:text-white"
            onClick={() => setRandomUserNumber(randomUserNumber + 3)}
          >
            See more
          </Button>
        </div>
        {whoToFollow &&
          whoToFollow.slice(0, randomUserNumber).map((user) => (
            <div
              key={user.login.uuid}
              className="flex items-center justify-start gap-6 px-4 py-2 border border-black-100 rounded-xl hover:bg-gray-100 cursor-pointer"
            >
              <div>
                <img
                  className="rounded-full"
                  src={user.picture.large}
                  width={50}
                  height={50}
                  alt="whats happening image"
                />
              </div>
              <div>
                <p className="font-semibold text-black hover:underline truncate">
                  {user.name.first}
                </p>
                <p className="text-sm text-black text-muted-foreground">
                  {user.login.username}
                </p>
              </div>
              <Button className="text-black  rounded-2xl bg-white ml-auto hover:text-white">
                Follow
              </Button>
            </div>
          ))}
      </div>
      <div className="text-sm text-gray-400 mt-6 text-center cursor-pointer font-medium">
        About | Help | Press | API | Jobs | Privacy | Terms | Locations |
        Language | Meta | Verified
      </div>
      <div className="text-sm text-gray-400 mt-6 text-center cursor-pointer font-medium">
        © 2024 INSTAGRAM BY KYUUBITILA
      </div>
    </div>
  );
};

export default Widgets;
