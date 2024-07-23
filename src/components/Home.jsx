import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/heroimage.jpg";
import IsraelResume from "../assets/IsrealResume.pdf";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full  px-4 md:flex-row">
        <div className="flex flex-col me-5 justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            I'm Israel Bello
          </h2>
          <p className="text-gray-500 py-4 max-w-md leading-9">
            I'm a Front-end developer focused on crafting clean & user-friendly
            experience, I am passionate about building excellent software that
            improves the lives the my community and those around me
          </p>

          <div>
            <button className=" group text-white w-fit px-6 py-3 my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-500 to-gray-800 ">
              <a href={IsraelResume} download={IsraelResume} className="flex">
                Resume
                <span className="my-1 group-hover:rotate-90 duration-300">
                  <MdKeyboardArrowRight />
                </span>
              </a>
            </button>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-50"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
