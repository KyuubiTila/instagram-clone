/* eslint-disable react/no-array-index-key */
import React from 'react';
import type { NextPage } from 'next';
import StoryBoard from '@/components/story/StoryBoard';
import PostCard from '@/components/post/PostCard';

const Home: NextPage = () => {
  return (
    <div className="md:mr-60 lg:mr-60 w-full">
      <div className="w-full border-gray-200 border-2 rounded-xl ">
        <StoryBoard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default Home;
