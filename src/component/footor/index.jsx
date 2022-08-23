/** @format */

import React from "react";
import logo from "../../assets/headerImages/logo.png";
import nodelogo from "../../assets/headerImages/nodelogo.png";
import firebase from "../../assets/headerImages/firebase.png";
import git from "../../assets/headerImages/git.png";
import htmls from "../../assets/headerImages/htmls.png";
import tailwinds from "../../assets/headerImages/tailwind.png";
import boot from "../../assets/headerImages/boot.png";
import antd from "../../assets/headerImages/antd.png";
import java from "../../assets/headerImages/java.png";

const Footor = () => {
  return (
    <>
      <footer class="py-10 md:py-16 mb-20 md:mb-40 lg::mb-52">
        <div class="container max-w-screen-xl mx-auto px-4">
          <div class="text-center">
            <h1 class="font-medium text-gray-700 text-4xl md:text-5xl mb-5">
              Expertise
            </h1>

            <p class="font-normal text-gray-400 text-md md:text-lg mb-20">
              I got the experience. Here is my toolbelt for success.
            </p>

            <div class="flex items-center justify-center space-x-8">
              <a
                href="#"
                class="w-20 h-20 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <img src={logo} />
              </a>

              <a
                href="#"
                class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <img src={nodelogo} />
              </a>

              <a
                href="#"
                class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <img src={firebase} />
              </a>

              <a
                href="#"
                class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <img src={git} />
              </a>

              <a
                href="#"
                class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <img src={htmls} />
              </a>

              <a
                href="#"
                class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <img src={tailwinds} />
              </a>
              <a
                href="#"
                class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <img src={boot} />
              </a>

              <a
                href="#"
                class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <img src={antd} />
              </a>
              <a
                href="#"
                class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <img src={java} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footor;
