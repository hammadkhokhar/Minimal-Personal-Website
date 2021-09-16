import React from "react";
import Image from "next/image";
import { Si1Password, SiAdobe, SiEasyjet, SiIata } from "react-icons/si";

const Clients = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 h-10 lg:text-2xl dark:text-white">
            Worked with leading brands
          </h1>
          <div className="inline-flex items-center mr-2 py-0.5 pl-2 pr-2">
            <SiEasyjet
              color="white"
              title="Iata"
              size="70px"
              className="mr-2"
            />
            <SiIata
              color="white"
              title="Iata"
              size="70px"
              className="ml-2"
            />
            Agencies
            </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
