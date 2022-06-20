const axios = require('axios');

test
(
    "test case",()=>
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