import React from 'react';
import PostCard from '@/components/post/PostCard';
import StoryBoard from '@/components/story/StoryBoard';

export default function Home() {
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
}
