const axios = require('axios');
var tabMessage = [];
function  api(status)
{
    axios
		.get("https://facebook.github.io/react-native/movies.json")
		.then
		(
			 (data) => 
			{  
				//console.log("messages",data.status);
        status = data.status;
			}
      );
      //console.log(status,'stttssssssssssssssssss')
      //return data;
}
var status = 0;
let getData =  function()
	{
	  axios
		.get("https://facebook.github.io/react-native/movies.json")
		.then
		(
			(data) => 
			{
				console.log("messages",data.status);
				status= data.status;
			}
		);
  	}
    console.log(getData());
    console.log(status)
module.exports = api;