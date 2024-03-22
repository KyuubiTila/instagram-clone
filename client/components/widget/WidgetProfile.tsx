import React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';

const WidgetProfile = () => {
  return (
    <div>
      <div className="mt-4 flex flex-col gap-2 bg-white rounded-xl border border-gray-200  top-16">
        <div className="flex items-center justify-start gap-6 px-4 py-2 hover:bg-gray-100 hover:border-blue-900 rounded-xl cursor-pointer">
          {/* <div> */}
          <Image
            className="rounded-full"
            width={50}
            height={50}
            alt="whats happening image"
            src="/x-big.jpg"
          />
          {/* </div> */}
          <div>
            <p className="font-semibold text-black hover:underline truncate">
              Tunde
            </p>
            <p className="text-sm text-black text-muted-foreground">
              kyuubiTila
            </p>
          </div>
          <Button
            disableElevation
            className="text-black text-xs bg-gray-300 ml-auto hover:bg-gray-400 hover:text-white"
          >
            Switch Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WidgetProfile;
