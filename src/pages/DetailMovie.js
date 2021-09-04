import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getApiMovieId } from "../helper/ApiMovie";

const DetailMovie = () => {
  const id = useParams();

  const [dataMovie, setDataMovie] = useState();
  const [btnFavorit, setBtnFavorit] = useState(true);

  const getDataMovie = async () => {
    const data = await getApiMovieId(id);

    if (data) {
      setDataMovie(data);
    } else {
      console.log(data);
    }
  };

  const getItemFavorit = () => {
    const check = localStorage.getItem("listFavorit");
    if (check) {
      const parse = JSON.parse(check);
      const a = parse.find((element) => element === id.id);
      if (a === id.id) {
        setBtnFavorit(false);
      }
    }
  };

  useEffect(() => {
    getDataMovie();
    getItemFavorit();
    // eslint-disable-next-line
  }, []);

  const handleFavorit = (value) => {
    const datass = localStorage.getItem("listFavorit");
    const dataList = localStorage.getItem("valueList");
    if (datass) {
      const a = JSON.parse(datass);
      const b = JSON.parse(dataList);

      const check = a.find((element) => element === id.id);

      if (!check) {
        a.push(id.id);
        b.push(value);

        localStorage.setItem("listFavorit", JSON.stringify(a));
        localStorage.setItem("valueList", JSON.stringify(b));
        setBtnFavorit(false);
      }
    } else {
      const data = [];
      const datavalue = [];
      data.push(id.id);
      datavalue.push(value);

      localStorage.setItem("listFavorit", JSON.stringify(data));
      localStorage.setItem("valueList", JSON.stringify(datavalue));
      setBtnFavorit(false);
    }
  };

  const handleUnFavorit = () => {
    const datass = localStorage.getItem("listFavorit");
    const dataList = localStorage.getItem("valueList");
    const a = JSON.parse(datass);
    const b = JSON.parse(dataList);
    const deleteData = a.indexOf(id.id);

    b.splice(deleteData, 1);

    const list = a.filter((element) => element !== id.id);
    localStorage.setItem("listFavorit", JSON.stringify(list));
    localStorage.setItem("valueList", JSON.stringify(b));
    setBtnFavorit(true);
  };

  return (
    <div className="mx-auto container">
      {dataMovie ? (
        <div
          className=" w-full flex flex-row items-start justify-between max-w-screen-lg mx-auto mt-20 relative"
          style={{ padding: "25px 4%" }}
        >
          <img
            src={
              dataMovie.Poster !== "N/A"
                ? dataMovie.Poster
                : "https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg"
            }
            alt="poster"
          />

          <div className="h-full pl-4 ">
            <h1 className="tracking-wider font-bold mt-0 text-2xl">
              {dataMovie.Title}
            </h1>
            <p>
              <strong>Genre:</strong>
              {dataMovie.Genre}
            </p>
            <p>
              <strong>Duration:</strong>
              {dataMovie.Runtime}
            </p>
            <p>
              <strong>Year:</strong>
              {dataMovie.Year}
            </p>
            <p>
              <strong>Overview:</strong>
              {dataMovie.Plot}
            </p>
          </div>

          <div className="absolute right-0 bottom-0 mr-4 lg:mr-20">
            {btnFavorit ? (
              <button
                onClick={() => {
                  handleFavorit(dataMovie);
                }}
                className="bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded"
              >
                <p>Favorite</p>
              </button>
            ) : (
              <button
                onClick={() => {
                  handleUnFavorit();
                }}
                className="bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded"
              >
                <p>Unfavorite</p>
              </button>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DetailMovie;
