import React from "react";

const bar = () => {
  const links = [
    {
      id: 1,
      link: "Home",
    },

    {
      id: 2,
      link: "MISSION",
    },

    {
      id: 3,
      link: "VISION",
    },

    {
      id: 4,
      link: "Home",
    },

    {
      id: 5,
      link: "Class",
    },

    {
      id: 6,
      link: "Office",
    },
  ];

  return (
    <div>
      <div className="flex justify-center py-5 text-center bg-white">
        <ul className=" flex justify-center text-center text-gray-500">
          {links.map(({ id, link }) => (
            <li key={id} className="text-xl text-center px-5">
              {link}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default bar;
