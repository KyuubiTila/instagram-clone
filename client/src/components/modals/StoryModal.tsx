import React from 'react';
import EmojiSVG from '../svgComps/EmojiSVG';
import LoveSVG from '../svgComps/LoveSVG';
import SendSVG from '../svgComps/SendSVG';

const StoryModal = () => {
  return (
    <>
      <input type="checkbox" id="my_modal_8" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box h-full carousel p-0">
          <div className="w-full  carousel">
            <div id="slide1" className="relative w-full carousel-item">
              <img
                src="https://picsum.photos/id/500/800/300"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide4"
                  className="btn btn-circle text-white bg-transparent"
                >
                  ❮
                </a>
                <a
                  href="#slide2"
                  className="btn btn-circle text-white  bg-transparent"
                >
                  ❯
                </a>
              </div>
              <div className="absolute bottom-4 left-0 justify-between right-0 flex items-center">
                <div className="w-full mx-2 relative">
                  <button
                    type="submit"
                    className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none"
                  >
                    <EmojiSVG />
                  </button>
                  <input
                    className="bg-transparent pl-8 pr-12 flex w-full rounded outline-double text-white border border-gray-900 placeholder-white"
                    type="text"
                    placeholder="Add comment"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 text-white top-1/2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none"
                  >
                    send
                  </button>
                </div>
                <button>
                  <LoveSVG />
                </button>
                <button className="mx-2">
                  <SendSVG />
                </button>
              </div>
            </div>

            <div id="slide2" className="relative w-full  carousel-item">
              <img
                src="https://picsum.photos/id/501/800/300"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide1"
                  className="btn btn-circle text-white bg-transparent"
                >
                  ❮
                </a>
                <a
                  href="#slide3"
                  className="btn btn-circle text-white bg-transparent"
                >
                  ❯
                </a>
              </div>
              <div className="absolute bottom-4 left-0 justify-between right-0 flex items-center">
                <div className="w-full mx-2 relative">
                  <button
                    type="submit"
                    className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none"
                  >
                    <EmojiSVG />
                  </button>
                  <input
                    className="bg-transparent pl-8 pr-12 flex w-full rounded outline-double text-white border border-gray-900 placeholder-white"
                    type="text"
                    placeholder="Add comment"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 text-white top-1/2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none"
                  >
                    send
                  </button>
                </div>
                <button>
                  <LoveSVG />
                </button>
                <button className="mx-2">
                  <SendSVG />
                </button>
              </div>
            </div>
            <div id="slide3" className="relative w-full  carousel-item">
              <img
                src="https://picsum.photos/id/502/800/300"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide2"
                  className="btn btn-circle text-white bg-transparent"
                >
                  ❮
                </a>
                <a
                  href="#slide4"
                  className="btn btn-circle text-white bg-transparent"
                >
                  ❯
                </a>
              </div>
              <div className="absolute bottom-4 left-0 justify-between right-0 flex items-center">
                <div className="w-full mx-2 relative">
                  <button
                    type="submit"
                    className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none"
                  >
                    <EmojiSVG />
                  </button>
                  <input
                    className="bg-transparent pl-8 pr-12 flex w-full rounded outline-double text-white border border-gray-900 placeholder-white"
                    type="text"
                    placeholder="Add comment"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 text-white top-1/2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none"
                  >
                    send
                  </button>
                </div>
                <button>
                  <LoveSVG />
                </button>
                <button className="mx-2">
                  <SendSVG />
                </button>
              </div>
            </div>
            <div id="slide4" className="relative w-full  carousel-item">
              <img
                src="https://picsum.photos/id/503/800/300"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide3"
                  className="btn btn-circle text-white bg-transparent"
                >
                  ❮
                </a>
                <a
                  href="#slide1"
                  className="btn btn-circle text-white bg-transparent"
                >
                  ❯
                </a>
              </div>
              <div className="absolute bottom-4 left-0 justify-between right-0 flex items-center">
                <div className="w-full mx-2 relative">
                  <button
                    type="submit"
                    className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none"
                  >
                    <EmojiSVG />
                  </button>
                  <input
                    className="bg-transparent pl-8 pr-12 flex w-full rounded outline-double text-white border border-gray-900 placeholder-white"
                    type="text"
                    placeholder="Add comment"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 text-white top-1/2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none"
                  >
                    send
                  </button>
                </div>
                <button>
                  <LoveSVG />
                </button>
                <button className="mx-2">
                  <SendSVG />
                </button>
              </div>
            </div>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_8">
          Close
        </label>
      </div>
    </>
  );
};

export default StoryModal;
