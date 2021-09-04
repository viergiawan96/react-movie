import React, { useEffect, useState } from "react";
import { ButtonNextPrev } from "../component/atoms";
import { CardMovie, Header } from "../component/molucules";
import { GetApiMovie, getApiMoviePage } from "../helper/ApiMovie";

const MovieList = (props) => {
  const [movie, setMovie] = useState([]);
  const [totalPage, SetTotalPage] = useState(0);
  const [page, setPage] = useState(1);

  const handleGetData = () => {
    const storage = localStorage.getItem("movieList");
    if (storage) {
      const datass = JSON.parse(storage);
      setMovie(datass.Search);
      SetTotalPage(Math.ceil(datass.totalResults / 10));
    }
  };

  useEffect(() => {
    handleGetData();
    // eslint-disable-next-line
  }, []);

  const handleGetDataMovie = async (value) => {
    const data = await GetApiMovie(value);
    const datass = JSON.parse(data);
    localStorage.setItem("movieList", data);

    setMovie(datass.Search);
  };

  function handleClick(id) {
    props.history.push(`/detail/${id}`);
  }

  const handlePage = async (value) => {
    setPage(value);
    if (value <= totalPage && value > 0) {
      const datass = await getApiMoviePage(value);
      setMovie(datass.Search);
    }
    console.log(totalPage, value);
  };

  return (
    <div className="relative mx-auto container">
      <header className="flex justify-between flex-wrap p-8 mr-10 xl:mr-44 relative">
        <Header handleGetDataMovie={(value) => handleGetDataMovie(value)} />
      </header>
      <div className=" flex flex-col  pt-10 items-center relative">
        <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {movie.length > 0
            ? movie.map((movie, index) => {
                return (
                  <CardMovie
                    key={index}
                    id={movie.imdbID}
                    img={
                      movie.Poster !== "N/A"
                        ? movie.Poster
                        : "https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg"
                    }
                    title={movie.Title}
                    year={movie.Year}
                    type={movie.Type}
                    handleClick={(value) => {
                      handleClick(value);
                    }}
                  />
                );
              })
            : null}
        </div>
      </div>
      {movie.length > 0 ? (
        <ButtonNextPrev
          page={page}
          totalPage={totalPage}
          handlePage={(value) => {
            handlePage(value);
          }}
        />
      ) : null}
    </div>
  );
};

export default MovieList;
