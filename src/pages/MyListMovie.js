import React, { useEffect, useState } from "react";
import { CardMovie } from "../component/molucules";

const MyListMovie = (props) => {
  const [valueList, setValueList] = useState([]);

  const getdataMovie = () => {
    const getData = localStorage.getItem("valueList");
    if (getData) {
      setValueList(JSON.parse(getData));
    }
  };

  useEffect(() => {
    getdataMovie();
    // eslint-disable-next-line
  }, []);

  function handleClick(id) {
    props.history.push(`/detail/${id}`);
  }

  return (
    <div className="relative mx-auto container">
      <div className=" flex flex-col  pt-20 items-center">
        <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {valueList.length > 0
            ? valueList.map((movie, index) => {
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
    </div>
  );
};

export default MyListMovie;
