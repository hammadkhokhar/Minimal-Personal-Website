import React from "react"
import Image from "next/image"
import profile from "../../public/hammad-khokhar-avatar.png"

const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-2xl dark:text-white">
                        Hey! I'm Hammad. Nice to meet you. <br/>
                        <br/>
                        You could have been anywhere in the world right now, but you're here with me. I appreciate that.
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                            I develop robust and scalable cloud-based web applications and REST APIs.
                        </p>
                        <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 rounded-full text-xs font-medium bg-gray-50 text-gray-900">
                            Cloud Computing
                        </span>
                        <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 rounded-full text-xs font-medium bg-gray-50 text-gray-900">
                            Microservices
                        </span>
                        <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 rounded-full text-xs font-medium bg-gray-50 text-gray-900">
                            Serverless
                        </span>
                        <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 rounded-full text-xs font-medium bg-gray-50 text-gray-900">
                            Big Data
                        </span>
                        <span className="inline-flex items-center m-1 py-0.5 pl-2 pr-2 rounded-full text-xs font-medium bg-gray-50 text-gray-900">
                            AWS
                        </span>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full mx-auto"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;