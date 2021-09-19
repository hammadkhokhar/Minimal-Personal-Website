import React from "react";
import Image from "next/image";

const values = [
  "Cloud Computing",
  "Microservices",
  "Web Applications",
  "AWS",
  "Serverless",
  "Data Science",
  "eCommerce",
];

const About = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-16 ">
          <h1 className="text-lg font-bold text-gray-900 lg:text-2xl dark:text-white">
            Hey! I'm Hammad. Nice to meet you. <br />
            <br />
            You could have been anywhere in the world right now, but you're here
            with me. I appreciate that.
          </h1>
          <div className="text-sm mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              I develop robust and scalable cloud-based web applications and
              REST APIs.
            </p>
            {values.map((todo, index) => (
              <span
                key={index}
                className="inline-flex items-center mr-2 py-0.5 pl-2 pr-2 rounded-full text-xs font-medium bg-gray-50 text-gray-900 mb-1"
              >
                {todo}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-16 lg:px-4 mb-1">
          <Image
            src="/hammad-khokhar-avatar.png"
            alt="Profile"
            priority={true}
            className="rounded-full mx-auto"
            width={250}
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
