import Image from 'next/image';
import React from 'react';
import Login from './Login';

const AuthForm = ({ children }) => {
  return (
    <div className="flex min-h-[100vh] w-full items-center justify-center bg-[#fafafa]">
      <div className="h-full flex">
        <div className="relative hidden h-[590px] overflow-hidden lg:block">
          <Image
            priority
            src="/loginFrame.png"
            alt="instagram"
            height={635}
            width={465}
          />
          <picture>
            <img src="/loginFrame.png" alt="instagram" />
          </picture>
          <div className="absolute top-[26px] right-14 h-full w-full">
            <div className="relative">
              <div className="absolute top-0 right-0 h-541 w-250 animate-loginImage1 opacity-0">
                <Image
                  priority
                  src="/loginImg1.png"
                  alt="instagram"
                  height={541}
                  width={250}
                />
              </div>
              <div className="absolute top-0 right-0 h-541 w-250 animate-loginImage2 opacity-0">
                <Image
                  src="/loginImg2.png"
                  alt="instagram"
                  height={541}
                  width={250}
                />
              </div>
              <div className="absolute top-0 right-0 h-541 w-250 animate-loginImage3 opacity-0">
                <Image
                  src="/loginImg3.png"
                  alt="instagram"
                  height={541}
                  width={250}
                />
              </div>
              <div className="absolute top-0 right-0 h-541 w-250 animate-loginImage4 opacity-0">
                <Image
                  src="/loginImg4.png"
                  alt="instagram"
                  height={541}
                  width={250}
                />
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthForm;
