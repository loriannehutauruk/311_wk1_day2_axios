// import axios here
const axios = require('axios')
const config = require('../config')
//console log is just to show that this would go into the config file and retrieve the api key.
console.log(config.API_KEY)
// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
// API key was deleted

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${config.API_KEY}`
  // code here
  axios.get(url)
    .then(function (response){
      //handle success
      // console.log(response.data.results);
      return response.data.results
    })
    .catch(function (error) {
      //handles errors
      console.log(error);
    })
    .finally (function (){
      //always executed. this is where you can define what you always want to run
    });
}
discoverMovie();  

const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${config.API_KEY}`
  // code here. We are going into the url, created an object params and get the id. 
  axios.get(url, {
    params: {
      id: 500
    }
  })
  .then(function (response){
    //handle success
    // console.log(response.data.original_title);
    return response.data.original_title
  })
  .catch(function (error) {
    //handles errors
    console.log(error);
  })
  .finally (function (){
    //always executed. this is where you can define what you always want to run
  }); 
}
getMovieById();

const getMovieByIdFailure = () => {
  const fakeId = 5783 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${config.API_KEY}`
  // code here
  axios.get(url)
  .then(function (response){
    //handle success
   console.log(response)
  
  })
  .catch(function (error) {
    //handles errors
    // console.log(error);
    return error
  })
  .finally (function (){
    //always executed. this is where you can define what you always want to run
  });

}



module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}