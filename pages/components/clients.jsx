import React from "react";
import Image from "next/image";
import { SiEasyjet, SiIata } from "react-icons/si";

const Clients = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 mt-20 ">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 lg:text-2xl dark:text-white">
            Trusted for projects of leading brands
          </h1>
          <div className="inline-flex items-center">
            <div>
              <Image
                src="/huawei.png"
                alt="Profile"
                priority={true}
                className="rounded-full"
                width={60}
                height={60}
              />
            </div>
            <div className="ml-24">
              <SiIata
                color="white"
                title="Iata"
                size="30px"
                className="items-center justify-center"
              />
              <h4 className="text-sm">Agencies</h4>
            </div>
            <div className="ml-20">
              <Image
                src="/scb-logo-white.png"
                alt="Profile"
                priority={true}
                className="mx-auto"
                width={150}
                height={60}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
