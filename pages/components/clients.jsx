import React from "react";
import Image from "next/image";
import {SiEasyjet, SiIata } from "react-icons/si";

const Clients = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 mt-20 ">
          <h1 className="text-2xl font-bold text-gray-900 h-10 lg:text-2xl dark:text-white">
            Worked with leading brands
          </h1>
          <div className="inline-flex items-center mr-2 pl-2 pr-2">
            <Image
              src="/huawei.png"
              alt="Profile"
              priority={true}
              className="rounded-full mx-auto"
              width={60}
              height={60}
            />
            <SiIata
              color="white"
              title="Iata"
              size="70px"
              className="ml-10"
            />
            Agencies
            </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
