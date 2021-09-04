import React, { useState } from "react";
import search from "../../assets/search.svg";
import { Link } from "react-router-dom";

const Header = ({ handleGetDataMovie }) => {
  const [valueSearch, setvalueSearch] = useState();

  function handleTest() {
    let data = valueSearch;
    console.log("handletestheader");

    if (data) {
      handleGetDataMovie(data);
    }
  }
  function handleChange(e) {
    setvalueSearch(e.target.value);
  }

  return (
    <div>
      <Link to="/movie">
        <button className="ml-44 bg-transparent text-indigo-700 font-semibold  py-1 px-4 border border-indigo-500 rounded">
          <p>My List Favorite</p>
        </button>
      </Link>
      <div className="absolute right-0 top-0 mr-2 mt-5">
        <div className="pt-2 relative mx-auto text-gray-600">
          <input
            className="border-2 border-gray-300 bg-white h-10 px-2 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-5 mr-4"
            onClick={() => {
              handleTest();
            }}
          >
            <img
              className="text-gray-600 h-4 w-4 fill-current"
              src={search}
              alt="search"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
