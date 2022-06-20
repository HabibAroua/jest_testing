
const axios = require('axios');

class Movies
{
    async api()
    {
        let status = 200;
        axios
		.get("https://facebook.github.io/react-native/movies.json")
		.then
		(
			(data) => 
			{
                status = data.status;
				console.log("messages",data.data);
				return data.status;
			}
		);
        return status;
    }
    
}

export default Movies;