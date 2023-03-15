/** @format */

import React from "react";

const Education = () => {
  return (
    <>
      <section class="mt-14 md:py-16">
        <div class="container max-w-screen-xl mx-auto px-6">
          <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Education
          </h1>

          <p class="font-normal text-gray-500 text-xs md:text-base ">
            Below is a summary of the places I studied
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            <div class="bg-gray-50 px-4 py-4 bg-red-100 rounded-md">
              <h4 class="font-medium  text-lg mb-2">2017 </h4>

              <p class="font-normal text-gray-500 text-md">
                INTERMEDIATE EDUCATION
              </p>
              <p class="font-semibold text-gray-500 text-md relative z-10 ml-1">
                Government College Qila didar Singh
              </p>
            </div>
            <div class="bg-gray-50 px-4 py-4 bg-red-100 rounded-md">
              <h4 class="font-medium text-gray-700 text-lg ">2018 – 2020</h4>

              <p class="font-normal text-gray-500 text-md ">
                BACHELOR IN COMPUTER SCIENCE
              </p>
              <p class="font-semibold text-gray-500 text-md relative z-10 ml-1">
                GIFT UNIVERSITY
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
