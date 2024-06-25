const express = require("express");
const app = express();

require("dotenv").config();

let dayRoutes = require('../myapisql-app/routes/dayRoutes');
let locationRoutes = require('../myapisql-app/routes/locationRoutes')
let countryRoutes = require('../myapisql-app/routes/countryRoutes')


app.use(express.json());

app.use('/days', dayRoutes);
app.use('/locations', locationRoutes);
app.use('/countries', countryRoutes);

// Database must connect before any data is added
let dbConnect = require("../mysqldb-app/dbConnect")

//Data being added to the database
let populateDB = require('../myapisql-app/populateDB')


    app.get("/", (req, res) => {
        res.json({ message: "Welcome to mySQLDB application." });
    });


// set port, listen for requests
const PORT = process.env.PORT || 8080;

    app.listen(PORT, () => {
        console.log(`Server is running on port${PORT}.`);
    });

/*       
    {
        "day": "20/06/1992",
        "temperature": "122 °C",
        "windSpeed": "92 km/h",
        "windDirection":"south east",
        "sunDescription":"sunny intervals",
        "LocationID":1
    }

*/