//Four our js code to get our app up and running

//Using the express package
const express = require('express');
//We then execute the express - handle heavy lifting
const app = express();
//Defining a port to execute on
const port = 3000;

//Routing
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
app.get('/hello/:name/:secondname', (req, res) => {
    const name = req.params.name;
    const secondname = req.params.secondname;
    res.send(`Hello ${name} ${secondname}`);
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