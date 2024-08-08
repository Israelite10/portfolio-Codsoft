import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.jpeg";
import tailwind from "../assets/tailwind.png";
import git from "../assets/git.png";
import boostrap from "../assets/boostrap.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: git,
      title: "GIT",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: boostrap,
      title: "BOOTSTRAP",
      style: "shadow-purple-500",
    },
  ];

  return (
    <div
      name="skill"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-0 lg:pt-24"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6"> These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm-px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-14 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
