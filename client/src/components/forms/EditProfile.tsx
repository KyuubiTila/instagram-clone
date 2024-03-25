'use client';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const EditProfile = () => {
  const initialValues = {
    website: '',
    bio: '',
    gender: '',
  };

  const validationSchema = Yup.object().shape({
    website: Yup.string().required('Website is required'),
    bio: Yup.string().required('Bio is required'),
    gender: Yup.string().required('Gender is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    // Handle form submission
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="flex my-12 justify-center">
            <div className="">
              <h2 className="text-xl font-semibold leading-7 text-gray-900">
                Edit Profile
              </h2>

              <div className="mt-10 flex flex-col gap-8">
                <div className="flex  items-center">
                  <label
                    htmlFor="photo"
                    className="text-sm  font-medium leading-6 text-gray-900 flex-shrink-0 w-24"
                  >
                    <svg
                      className="h-12 w-12 text-gray-300"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                  <div className="flex flex-col ">
                    <div className=" bg-white   text-sm font-semibold text-black">
                      KyuubiTila
                    </div>
                    <div className=" bg-white   text-sm font-semibold text-blue-900 hover:cursor-pointer">
                      Change profile photo
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <label
                    htmlFor="website"
                    className="text-sm  font-medium leading-6 mt-3 text-gray-900 flex-shrink-0 w-24"
                  >
                    Website
                  </label>
                  <div className=" ">
                    <Field
                      id="website"
                      name="website"
                      placeholder="Enter Website Details"
                      className="block px-2 w-full rounded-md border border-gray-300 py-1.5 text-gray-900 shadow-sm focus:ring focus:ring-indigo-600 focus:ring-opacity-50 sm:text-sm sm:leading-6 mt-1"
                    />
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      Write a few sentences about yourself.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <label
                    htmlFor="bio"
                    className="text-sm font-medium leading-6 text-gray-900 flex-shrink-0 w-24"
                  >
                    Bio
                  </label>
                  <div className=" ">
                    <Field
                      as="textarea"
                      id="bio"
                      name="bio"
                      placeholder="Enter Bio"
                      className="block px-2 w-full rounded-md border border-gray-300 py-1.5 text-gray-900 shadow-sm focus:ring focus:ring-indigo-600 focus:ring-opacity-50 sm:text-sm sm:leading-6 mt-1"
                    />
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      Write a few sentences about yourself.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <label
                    htmlFor="gender"
                    className="text-sm font-medium leading-6 mt-3 text-gray-900 flex-shrink-0 w-24"
                  >
                    Gender
                  </label>
                  <div className=" ">
                    <Field
                      id="gender"
                      name="gender"
                      placeholder="Male"
                      className="block px-2 w-full rounded-md border border-gray-300 py-1.5 text-gray-900 shadow-sm focus:ring focus:ring-indigo-600 focus:ring-opacity-50 sm:text-sm sm:leading-6 mt-1"
                    />
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      This won’t be part of your public profile.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-x-6">
            <button
              type="button"
              className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>

          <div className="mt-2 flex flex-col gap-8">
            <div className="text-sm text-gray-400 mt-6 text-center cursor-pointer font-medium">
              About | Help | Press | API | Jobs | Privacy | Terms | Locations |
              Language | Meta | Verified
            </div>
            <div className="text-sm text-gray-400 mt-2 text-center cursor-pointer font-medium">
              © 2024 INSTAGRAM BY KYUUBITILA
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditProfile;
