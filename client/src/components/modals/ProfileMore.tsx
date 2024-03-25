import React from 'react';

const ProfileMore = () => {
  return (
    <>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box p-0">
          <label
            className="flex py-4 bg-transparent hover:cursor-pointer text-red-400 justify-center border-b border-full"
            htmlFor="my_modal_7"
          >
            Block
          </label>
          <label
            className="flex py-4 bg-transparent hover:cursor-pointer text-red-400 justify-center border-b border-full"
            htmlFor="my_modal_7"
          >
            Restrict
          </label>
          <label
            className="flex py-4 bg-transparent hover:cursor-pointer text-red-400 justify-center border-b border-full"
            htmlFor="my_modal_7"
          >
            Report
          </label>
          <label
            className="flex py-4 bg-transparent hover:cursor-pointer text-slate-950 justify-center border-b border-full"
            htmlFor="my_modal_7"
          >
            Share to
          </label>
          <label
            className="flex py-4 bg-transparent hover:cursor-pointer text-slate-950 justify-center border-b border-full"
            htmlFor="my_modal_7"
          >
            About this account
          </label>
          <label
            className="flex py-4 bg-transparent hover:cursor-pointer text-slate-950 justify-center  border-full"
            htmlFor="my_modal_7"
          >
            Cancel
          </label>
        </div>

        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
};

export default ProfileMore;
