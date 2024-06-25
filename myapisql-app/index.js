const express = require("express");

const app = express();

require("dotenv").config();

let dayRoutes = require('../myapisql-app/routes/dayRoutes');
let locationRoutes = require('../myapisql-app/routes/locationRoutes');
let countryRoutes = require('../myapisql-app/routes/countryRoutes')


let dbConnect = require("./dbConnect")

// parse requests of content-type - application/json
app.use(express.json());
app.use('/days', dayRoutes);
app.use('/locations', locationRoutes);
app.use('/countries', countryRoutes);

    app.get("/", (req, res) => {
        res.json({ message: "Welcome to mySQLDB application." });
    });


// set port, listen for requests
const PORT = process.env.PORT || 8080;

    app.listen(PORT, () => {
        console.log(`Server is running on port${PORT}.`);
    });

