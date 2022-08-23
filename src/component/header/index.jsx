/** @format */

import React from "react";
import profile from "../../assets/headerImages/Profile-image.jpg";
import logo from "../../assets/headerImages/logo.png";
import cv from "../../assets/headerImages/CV.pdf";

const Header = () => {
  const DownloadFile = (params) => {
    window.location.href = cv;
  };
  return (
    <>
      <div class="bg-gray-100">
        <section class="py-10 md:py-16">
          <div class="container max-w-screen-xl mx-auto px-4">
            <nav class="flex items-center justify-between mb-40">
              <img
                class="md:animate-spin object-scale-down h-20 ..."
                src={logo}
                alt="Logo"
              />

              <button
                class="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500"
                onClick={DownloadFile}>
                Get my CV
              </button>
            </nav>

            <div class="text-center">
              <div class="flex justify-center mb-16">
                <img
                  class="object-scale-down h-60 w-500 ... rounded-lg"
                  src={profile}
                  alt="Image"
                />
              </div>

              {/* <h6 class="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">AbdulRehman Arshad</h6> */}
              {"AbdulRehman Arshad".split("").map((letter, index) => {
                return (
                  <span
                    key={index}
                    className="hover:text-fun-orange click:goodbyeLetterAnim transition-all duration-500 hover:-mt-2 hover:duration-100 font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
                    {letter}
                  </span>
                );
              })}

              <h1 class="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
                Junior Frontend Developer
              </h1>

              <p class="font-normal text-gray-600 text-md md:text-xl mb-16">
                I have a passion for software. I enjoy creating tools that make
                life easier for people.
              </p>

              <a
                href="#"
                class="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">
                Hire me
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
