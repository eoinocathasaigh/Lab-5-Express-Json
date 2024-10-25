//Four our js code to get our app up and running

//Using the express package
const express = require('express');
//We then execute the express - handle heavy lifting
const app = express();
//Defining a port to execute on
const port = 3000;

//Routing - Listening for a certain request
//Req - http request
//Res - http response
//Essentially we get a response in the form of text "Hello world"
//Can basically say what address the response will be sent to
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying');
});

//Adding another route to handle another url
//This get will handle routing us to another page
//It will get the url request and return us a message based on the name we enter with it
//Eg. If I use ../hello/Eoin in my search bar - Hello Eoin is returned to me
//Can be altered to add more parameters to it
//:parameter is how we create a new parameter
//const param = req.params.param is how we access it
app.get('/hello/:name/:secondname', (req, res) => {
    const name = req.params.name;
    const secondname = req.params.secondname;
    res.send(`Hello ${name} ${secondname}`);
    //Can also just include them in the send 
    //- res.send(`Hello ` +req.params.name);
});

//Route to return a list of movies objects in JSON format
//We're creating our own api
app.get('/api/movies', (req, res) => {
    //We essentially create our own array of movie items
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    //Returning a response to the user
    //Note - status code in 200 means a successful response
    res.status(200).json({ myMovies:movies });
});

//This is an error handling component
//Like the name implies it acts as middleware to catch any server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    //Sets a status code of some sort
    //This one is 500 - implies a server side error
    //400 = client side error
    res.status(500).send('Something went wrong!');
});

//Server is just listening for a http request coming in
//Config - always has to be at the bottom of your file - always
//Js starts top to bottom
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});