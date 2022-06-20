const axios = require('axios');

const myData = function(data) {
    let myData = data;
    console.log('status:', myData.status);
    return myData.status;
  }
  
  axios.get('https://facebook.github.io/react-native/movies.json')
  .then(response => {
    const data = response;
    return data
  })
  .then(myData)
  .catch(err => {
    console.log('Error: ', err);
  });