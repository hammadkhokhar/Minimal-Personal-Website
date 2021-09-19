import React from "react";
import {
  SiGithub,
  SiGooglecloud,
  SiJsonwebtokens,
  //tootls
  SiJira,
  SiTrello,
  SiAsana,
  SiSentry,
  SiVisualstudiocode,
  SiGit,
  SiPostman,
  SiSlack,
  SiZoom,
  SiSnyk,
  SiDocker,
  //frameworks
  SiTypescript,
  SiDjango,
  SiNextDotJs,
  //databases
  SiMysql,
  SiSocketDotIo,
  SiGoogleads,
  SiKubernetes,
  SiMongodb,
  SiSwagger,
  SiJest,
  SiJenkins,
  SiBootstrap,
  SiCloudflare,
  //cloud
  SiFirebase,
  SiAmazonaws,
  //languages
  SiPython,
  SiJavascript,
  SiJson,
  SiGraphql,
  //design
  SiAdobepremiere,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiJinja,
  SiWebstorm,
  SiStackoverflow,
  SiTwilio,
  SiHeroku,
  SiShopify,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="container px-4 mx-auto">
      {/* Tools */}
      <div className="lg:space-x-5 lg:flex lg:flex-row lg:-mx-4 flex flex-col-reverse mb-10">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-2xl dark:text-white">
            Tools
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <span className="inline-flex items-center mr-1 py-0.5 pl-2 pr-2 rounded-full text-xs font-medium">
              <SiVisualstudiocode color="white dark:black" title="VS Code" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 rounded-full text-xs font-medium">
              <SiPostman color="white dark:black" title="Postman" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 rounded-full text-xs font-medium">
              <SiSentry color="white dark:black" title="Sentry" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 rounded-full text-xs font-medium">
              <SiGit color="white dark:black" title="Git" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 rounded-full text-xs font-medium">
              <SiSnyk color="white dark:black" title="Snyk" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 rounded-full text-xs font-medium">
              <SiGithub color="white dark:black" title="Github" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 rounded-full text-xs font-medium">
              <SiDocker color="white dark:black" title="Docker" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 rounded-full text-xs font-medium">
              <SiAsana color="white dark:black" title="Asana" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 rounded-full text-xs font-medium">
              <SiJira color="white dark:black" title="Jira" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 rounded-full text-xs font-medium">
              <SiTrello color="white dark:black" title="Trello" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 rounded-full text-xs font-medium">
              <SiSlack color="white dark:black" title="Slack" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 rounded-full text-xs font-medium">
              <SiWebstorm color="white dark:black" title="Webstorm" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 rounded-full text-xs font-medium">
              <SiStackoverflow
                color="white dark:black"
                title="Stackoverflow"
                size="50px"
              />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 rounded-full text-xs font-medium">
              <SiZoom color="white dark:black" title="Zoom" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiGoogleads color="white dark:black" title="Googleads" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiShopify color="white dark:black" title="Shopify" size="50px" />
            </span>
          </div>
        </div>
      </div>
      {/* Frameworks */}
      <div className="lg:space-x-5 lg:flex lg:flex-row lg:-mx-4 flex flex-col-reverse mb-10">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-2xl dark:text-white">
            Frameworks
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <span className="inline-flex items-center mr-1 text-3xl font-medium">
              Express
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiTypescript color="white dark:black" title="TyepScript" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiBootstrap color="white dark:black" title="Bootstrap" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiDjango color="white dark:black" title="Django" size="50px" />
              Rest
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiJinja color="white dark:black" title="Jinja" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiNextDotJs color="white dark:black" title="NextJS" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiJest color="white dark:black" title="Jest" size="50px" />
            </span>
          </div>
        </div>
      </div>
      {/* Languages & Platform */}
      <div className="lg:space-x-5 lg:flex lg:flex-row lg:-mx-4 flex flex-col-reverse mb-10">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-2xl dark:text-white">
            Languages & Platforms
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <span className="inline-flex items-center mr-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <FaNode color="white dark:black" title="NodeJS" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiJavascript color="white dark:black" title="Javascript" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiJson color="white dark:black" title="JSON" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiJsonwebtokens color="white dark:black" title="NextJS" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiSocketDotIo color="white dark:black" title="websockets" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiCloudflare color="white dark:black" title="Cloudflare" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiSwagger color="white dark:black" title="Swagger" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiJenkins color="white dark:black" title="Jenkins" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiTwilio color="white dark:black" title="Twilio" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiPython color="white dark:black" title="Python" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiGraphql color="white dark:black" title="GraphQL" size="50px" />
            </span>
          </div>
        </div>
      </div>
      {/* Databases */}
      <div className="lg:space-x-5 lg:flex lg:flex-row lg:-mx-4 flex flex-col-reverse mb-10">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-2xl dark:text-white">
            Databases
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <span className="inline-flex items-center mr-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiMysql color="white dark:black" title="AWS" size="50px" />
              ORM
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiMongodb color="white dark:black" title="MongoDB" size="50px" />
            </span>
            <span className="inline-flex items-center m-1  text-lg font-medium">
              NoSQL
            </span>
          </div>
        </div>
      </div>
      {/* Cloud */}
      <div className="lg:space-x-5 lg:flex lg:flex-row lg:-mx-4 flex flex-col-reverse mb-10">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-2xl dark:text-white">
            Cloud
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <span className="inline-flex items-center mr-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiAmazonaws color="white dark:black" title="AWS" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiFirebase color="white dark:black" title="Firebase" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiGooglecloud color="white dark:black" title="Google cloud" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiHeroku color="white dark:black" title="Heroku" size="50px" />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiKubernetes color="white dark:black" title="Kubernetes" size="50px" />
            </span>
          </div>
        </div>
      </div>
      {/* Design */}
      <div className="lg:space-x-5 lg:flex lg:flex-row lg:-mx-4 flex flex-col-reverse mb-10">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-2xl dark:text-white">
            Design
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <span className="inline-flex items-center mr-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiAdobephotoshop
                color="white dark:black"
                title="Adobe Photoshop"
                size="50px"
              />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiAdobepremiere
                color="white dark:black"
                title="Adobe Premier"
                size="50px"
              />
            </span>
            <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 text-xs font-medium">
              <SiAdobeaftereffects
                color="white dark:black"
                title="After Effects"
                size="50px"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
