const axios = require('axios');

test
(
    "Test api",()=>
    {
        axios
		    .get("https://facebook.github.io/react-native/movies.json")
		    .then
		    (
			    (data) => 
			    {
				    expect((data.status)).toBe(200)
			    }
		    );
    }
);