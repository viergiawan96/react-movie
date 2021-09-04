import React from "react";
import next from "../../assets/next.svg";
import prev from "../../assets/prev.svg";

const ButtonNextPrev = ({ page, totalPage, handlePage }) => {
  const handlePages = (value) => {
    handlePage(value);
  };

  function BtnNext() {
    if (page >= totalPage) {
      return "border border-indigo-500 bg-indigo-500 text-white block rounded-sm font-bold py-4 px-6 ml-2 flex items-center cursor-not-allowed";
    } else {
      return "border border-indigo-500 text-indigo-500 block rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-indigo-500 hover:text-white";
    }
  }
  function BtnPrev() {
    let pagess = page - 1;

    if (pagess <= 0) {
      return "border border-indigo-500 bg-indigo-500 text-white block rounded-sm font-bold py-4 px-6 ml-2 flex items-center mr-4 cursor-not-allowed";
    } else {
      return "border border-indigo-500 text-indigo-500 block rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-indigo-500 hover:text-white mr-4";
    }
  }

  const handleBtnPrev = (page) => {
    if (page <= 0) {
      console.log("tidak bisa lanjut");
    } else {
      const pages = page - 1;

      handlePages(pages);
    }
  };

  const handleBtnNext = (page) => {
    if (page >= totalPage) {
      console.log("tidak bisa lanjut");
    } else {
      const pages = page + 1;

      handlePages(pages);
    }
  };

  return (
    <div className="absolute right-0 mr-4 lg:mr-80 pt-4 lg:pt-2">
      <div className="flex flex-row mr-6">
        <button
          className={BtnPrev()}
          onClick={() => {
            handleBtnPrev(page);
          }}
        >
          <img
            color="green"
            className="h-5 w-5 mr-2 fill-current text-indigo-500"
            src={prev}
            alt="logo"
          />
          <h1>Prev</h1>
        </button>
        <button
          className={BtnNext()}
          onClick={() => {
            handleBtnNext(page);
          }}
        >
          <h1>Next</h1>
          <img
            className="h-5 w-5 ml-2 fill-current text-indigo-500"
            src={next}
            alt="logo"
          />
        </button>
      </div>
    </div>
  );
};

export default ButtonNextPrev;
