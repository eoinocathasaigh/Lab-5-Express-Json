//Four our js code to get our app up and running

//Using the express package
const express = require('express');
//We then execute the express - handle heavy lifting
const app = express();
//Defining a port to execute on
const port = 3000;

//Listening for the domain name
//Req - http request
//Res - http response
//Essentially we get a response in the form of text "Hello world"
//Can basically say what address the response will be sent to
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying');
});

//This is an error handling component
//Like the name implies it acts as middleware to catch any server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

//Server is just listening for a http request coming in
//Config - always has to be at the bottom of your file - always
//Js starts top to bottom
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});