'use client';
import React from 'react';
import InstagramSVG from '../svgComps/InstagramSVG';
import FaceBookSVG from '../svgComps/FaceBookSVG';
import AppleStoreSVG from '../svgComps/AppleStoreSVG';
import GooglePlaySVG from '../svgComps/GooglePlaySVG';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';

const Register = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    // Handle form submission
    setSubmitting(false);
  };

  return (
    <div className="h-full justify-between">
      <div className="flex  max-w-[350px] flex-col items-center justify-center border rounded-xl bg-white">
        <Link href="/">
          <div className="h-auto w-[175px] pt-10">
            <InstagramSVG disableDarkMode white={false} />
          </div>
        </Link>
        <div className="px-10 text-center my-1 text-sm font-semibold text-[#8e8e8e]">
          <p>Sign up to see photos and videos from your friends.</p>
        </div>
        <div className="w-full px-5 sm:px-10">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="signInPageFormContainer">
                <Field
                  className="w-full border rounded-xl my-1 bg-[#fafafa] px-2 py-[7px] text-sm focus:outline-none"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                />
                <Field
                  className="w-full border rounded-xl my-1 bg-[#fafafa] px-2 py-[7px] text-sm focus:outline-none"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <Field
                  className="w-full border rounded-xl my-1 bg-[#fafafa] px-2 py-[7px] text-sm focus:outline-none"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <button
                  className="rounded-lg bg-blue-400 hover:bg-blue-500 my-5 w-full px-2 py-1 text-sm font-semibold text-white"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign up
                </button>
              </Form>
            )}
          </Formik>
          <div>
            <div className="my-2 flex h-0 items-center justify-center">
              <div className="w-full border-b border-stone-300" />
              <p className="mx-2 text-sm font-semibold text-[#6d6d6d]">OR</p>
              <div className="w-full border-b border-stone-300" />
            </div>
            <div className="justify-center items-center flex hover:cursor-pointer">
              <div className="mr-2">
                <FaceBookSVG />
              </div>
              <span className="text-xs flex my-4 text-blue-900 font-semibold">
                Sign up with Facebook
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 flex max-w-[350px] justify-center border rounded-xl bg-white py-4 text-[14px]">
        <p>Already have an account?</p>
        <Link href="/signin">
          <button className="ml-2 font-semibold text-[#0095f6]" type="button">
            Sign in
          </button>
        </Link>
      </div>
      <div className="mt-3 text-center">
        <div className="text-xs my-6">Get the app</div>
        <div className="flex max-w-[350px] space-x-2">
          <AppleStoreSVG />
          <GooglePlaySVG />
        </div>
      </div>
    </div>
  );
};

export default Register;
