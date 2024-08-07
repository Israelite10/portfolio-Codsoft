import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-8 sm:mt-12 md:mt-16">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10 leading-normal lg:leading-loose ">
          An Experienced developer with a strong foundation in web application
          development and a track record of successful internships. Proficient
          in a range of programming languages, with a focus on creating
          efficient and user-friendly solutions. Adept at collaborating with
          cross-functional teams to translate complex requirements into
          innovative technical solutions. Demonstrated ability to design, code,
          and test front-end components. Committed to continuous learning and
          leveraging emerging technologies to drive impactful outcomes.
          Effective communicator with a passion for contributing to dynamic and
          forward-thinking projects.
        </p>
      </div>
    </div>
  );
};

export default About;
