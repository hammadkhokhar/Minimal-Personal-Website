import React from "react";

const Footer = () => {
  return (
    <div className="mt-12 lg:mt-18 sm:pb-12 sm:py-12 py-6">
      <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
        <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
        <div className="text-sm mb-12 text-center">
          <h2>General</h2>
          <br />
          <h1 className="text-lg">hello@hammadkhokhar.com</h1>
        </div>
        <div className="flex flex-col justify-between lg:flex-row items-center">
          <p>
            View&nbsp;
            <a
              href="https://github.com/hammadkhokhar/minimal-personal-website"
              className={"transition-colors hover:text-yellow-500"}
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
          </p>
          <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
            <a
              href="https://twitter.com/hammadkhokhar"
              className={"transition-colors hover:text-blue-500"}
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://github.com/hammadkhokhar"
              className={"transition-colors hover:text-yellow-500"}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
