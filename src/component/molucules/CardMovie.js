import React from "react";

const CardMovie = ({ id, img, title, year, type, handleClick }) => {
  function handleClicks() {
    handleClick(id);
  }
  return (
    <div>
      <div
        onClick={handleClicks}
        className="flex flex-col shadow-lg bg-white w-40 h-80 items-center relative rounded-xl
      transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer
      "
      >
        <img className="rounded-xl" width="100%" src={img} alt="testing" />
        <div className="text-sm font-bold py-2 text-center">
          <h1>{title}</h1>
        </div>
        <div className="absolute bottom-0 pb-4 left-0 pl-1">
          <div className="flex flex-row text-xs opacity-50">
            <h1>{year}</h1>
            <h1 className="px-1">-</h1>
            <h1>{type}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
