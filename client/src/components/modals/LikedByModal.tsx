import React from 'react';
import { Button } from '@mui/material';
import Image from 'next/image';

const LikedByModal = () => {
  return (
    <>
      <input type="checkbox" id="likedby" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box max-w-[400px]  p-0">
          <div className=" mx-auto shadow-lg border border-gray-200 rounded-lg relative">
            <div className="sm:flex flex-col p-2">
              <div className="flex items-center justify-between border-b">
                <h2 className="text-black text-lg font-semibold p-1 mx-auto">
                  Likes
                </h2>

                <label htmlFor="likedby">
                  <div className="flex items-center bg-gray-300  text-black hover:cursor-pointer hover:bg-gray-400 hover:text-white px-4 border rounded-lg">
                    X
                  </div>
                </label>
              </div>

              {/* liked array of users */}
              <div className=" flex flex-col w-full mt-2 ">
                <div className="flex items-center justify-start gap-6 px-4 py-2 border border-black-100 rounded-xl hover:bg-gray-100 cursor-pointer">
                  <div>
                    <Image
                      className="rounded-full border border-gray-400"
                      width={50}
                      height={50}
                      alt="dp"
                      src="/x-big.jpg"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-black hover:underline truncate">
                      tila
                    </p>
                    <p className="text-sm text-black text-muted-foreground">
                      KyuubiTila
                    </p>
                  </div>
                  <Button className="text-black  rounded-2xl bg-white ml-auto hover:bg-gray-400 hover:text-white">
                    Follow
                  </Button>
                </div>
              </div>
              <div className=" flex flex-col w-full mt-2 ">
                <div className="flex items-center justify-start gap-6 px-4 py-2 border border-black-100 rounded-xl hover:bg-gray-100 cursor-pointer">
                  <div>
                    <Image
                      className="rounded-full border border-gray-400"
                      width={50}
                      height={50}
                      alt="dp"
                      src="/x-big.jpg"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-black hover:underline truncate">
                      tila
                    </p>
                    <p className="text-sm text-black text-muted-foreground">
                      KyuubiTila
                    </p>
                  </div>
                  <Button className="text-black  rounded-2xl bg-white ml-auto hover:bg-gray-400 hover:text-white">
                    Follow
                  </Button>
                </div>
              </div>
              <div className=" flex flex-col w-full mt-2 ">
                <div className="flex items-center justify-start gap-6 px-4 py-2 border border-black-100 rounded-xl hover:bg-gray-100 cursor-pointer">
                  <div>
                    <Image
                      className="rounded-full border border-gray-400"
                      width={50}
                      height={50}
                      alt="dp"
                      src="/x-big.jpg"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-black hover:underline truncate">
                      tila
                    </p>
                    <p className="text-sm text-black text-muted-foreground">
                      KyuubiTila
                    </p>
                  </div>
                  <Button className="text-black  rounded-2xl bg-white ml-auto hover:bg-gray-400 hover:text-white">
                    Follow
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <label className="modal-backdrop" htmlFor="likedby">
          Close
        </label>
      </div>
    </>
  );
};

export default LikedByModal;
