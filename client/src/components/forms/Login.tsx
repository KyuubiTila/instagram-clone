'use client';
import React from 'react';
import InstagramSVG from '../svgComps/InstagramSVG';
import FaceBookSVG from '../svgComps/FaceBookSVG';
import AppleStoreSVG from '../svgComps/AppleStoreSVG';
import GooglePlaySVG from '../svgComps/GooglePlaySVG';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    // Handle form submission
    setSubmitting(false);
  };

  return (
    <div className="h-full justify-between">
      <div className="flex  max-w-[350px] flex-col items-center justify-center border rounded-xl  bg-white">
        <Link href="/">
          <div className="h-auto w-[175px] py-10">
            <InstagramSVG disableDarkMode white={false} />
          </div>
        </Link>
        <div className="w-full px-5 sm:px-10">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="signInPageFormContainer">
                <Field
                  className=" w-full border  rounded-xl my-1 bg-[#fafafa] px-2 py-[7px] text-sm focus:outline-none"
                  type="email"
                  id="signInPageEmail"
                  name="email"
                  placeholder="Phone number, username or email"
                />
                <Field
                  className="w-full border rounded-xl my-1 bg-[#fafafa] px-2 py-[7px] text-sm focus:outline-none"
                  type="password"
                  id="signInPagePassword"
                  name="password"
                  placeholder="Password"
                />
                <button
                  className=" rounded-lg  bg-blue-400 hover:bg-blue-500 my-5 w-full   px-2 py-1 text-sm font-semibold text-white"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign in
                </button>
              </Form>
            )}
          </Formik>
          <div>
            <div className="my-4 flex h-0 items-center justify-center">
              <div className="w-full border-b border-stone-300" />
              <p className="mx-2 text-sm font-semibold text-[#6d6d6d]">OR</p>
              <div className="w-full border-b border-stone-300" />
            </div>
            <div className=" justify-center items-center flex hover:cursor-pointer">
              <div className="mr-2">
                <FaceBookSVG />
              </div>
              <span className="text-xs flex my-2  text-blue-900 font-semibold">
                Sign in with Facebook
              </span>
            </div>
            <a className="text-xs flex justify-center my-5 text-blue-900  cursor-pointer ">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
      <div className="mt-2 flex max-w-[350px] justify-center border rounded-xl bg-white py-4 text-[14px]">
        <p>Don't have an account?</p>
        <Link href="/signup">
          <button className="ml-2 font-semibold text-[#0095f6]" type="button">
            Sign up
          </button>
        </Link>
      </div>
      <div className="mt-3 text-center">
        <div className="text-xs my-6">Get the app</div>
        <div className=" flex max-w-[350px]  space-x-2">
          <AppleStoreSVG />
          <GooglePlaySVG />
        </div>
      </div>
    </div>
  );
};

export default Login;
