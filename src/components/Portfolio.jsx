import React from "react";
import pic1 from "../assets/images/pic1.png";
import pic2 from "../assets/images/pic2.png";
import pic3 from "../assets/images/pic3.png";
import pic4 from "../assets/images/pic4.png";
import pic5 from "../assets/images/pic5.png";
import pic6 from "../assets/images/pic6.png";

const portfolios = [
  {
    id: 1,
    src: pic1,
    demoLink: "https://hotel-ng-two.vercel.app",
    codeLink: "https://github.com/Israelite10/hotel.ng.git",
    description: "Hotel.ng landing page",
  },
  {
    id: 2,
    src: pic2,
    demoLink: "https://group11-3rdproject-inkeeper.vercel.app",
    codeLink: "https://github.com/Israelite10/group11-3rdproject-inkeeper.git",
    description: "Digiplus landing page",
  },
  {
    id: 3,
    src: pic3,
    demoLink: "https://streamflix-self.vercel.app",
    codeLink: "https://github.com/Adeola-oluwa/FWD-LSETF-Netclone.git",
    description: "Netflix app clone",
  },
  {
    id: 4,
    src: pic4,
    demoLink: "https://weather-app-seven-mu-50.vercel.app",
    codeLink: "https://github.com/sarahannie/weather_app.git",
    description: "Weather App",
  },
  {
    id: 5,
    src: pic5,
    demoLink: "https://calculator-codsoft-theta.vercel.app/",
    codeLink: "https://github.com/Israelite10/Calculator-Codsoft.git",
    description: "Calculator App",
  },
  {
    id: 6,
    src: pic6,
    demoLink: "https://timbu-app-hng-stage2.vercel.app/",
    codeLink: "https://github.com/Israelite10/Timbu-app-Hng-stage2.git",
    description: "Timbu shop cart app",
  },
];

const Portfolio = () => {
  const handleDemoClick = (demoLink) => {
    window.open(demoLink, "_blank");
  };

  const handleCodeClick = (codeLink) => {
    window.open(codeLink, "_blank");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b  from-black to-gray-800 w-full pb-0 lg:pb-64 text-white pt-0 lg:pt-56  md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink, description }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={description}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex flex-col items-center justify-center p-4">
                <div className="flex items-center justify-center mb-4">
                  <button
                    className="w-1/2 px-6 py-1 m-2 duration-200 hover:scale-105"
                    onClick={() => handleDemoClick(demoLink)}
                  >
                    Demo
                  </button>
                  <button
                    className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105"
                    onClick={() => handleCodeClick(codeLink)}
                  >
                    Code
                  </button>
                </div>
                <p className="text-center mt-2">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
