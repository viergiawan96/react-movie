const axios = require("axios");

const GetApiMovie = (data) => {
  return new Promise((resolve, reject) => {
    const config = {
      method: "get",
      url: `https://www.omdbapi.com/?apikey=76018183&s=${data}&page=1`,
    };

    axios(config)
      .then(function (response) {
        resolve(JSON.stringify(response.data));
      })
      .catch(function (error) {
        reject(error);
        console.log(error);
      });
  });
};
const getApiMovieId = (data) => {
  const id = data.id;
  return new Promise((resolve, reject) => {
    const config = {
      method: "get",
      url: `https://www.omdbapi.com/?apikey=76018183&i=${id}`,
    };

    axios(config)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

const getApiMoviePage = (data) => {
  return new Promise((resolve, reject) => {
    const config = {
      method: "get",
      url: `https://www.omdbapi.com/?apikey=76018183&s=super&page=${data}`,
    };

    axios(config)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export { GetApiMovie, getApiMovieId, getApiMoviePage };
