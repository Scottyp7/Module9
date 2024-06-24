const express = require("express");
const app = express();

require("dotenv").config();

let dayRoutes = require('./routes/dayRoutes');
let sunRoutes = require('./routes/sunRoutes')
let tempRoutes = require('./routes/tempRoutes')
let windRoutes = require('./routes/windRoutes')

app.use(express.json());

app.use('/api/users', dayRoutes);
app.use('/api/sun', sunRoutes);
app.use('/api/temp', tempRoutes);
app.use('/api/wind', windRoutes);

let dbConnect = require("../mysqldb-app/dbConnect")
// parse requests of content-type - application/json



    app.get("/", (req, res) => {
        res.json({ message: "Welcome to mySQLDB application." });
    });


// set port, listen for requests
const PORT = process.env.PORT || 8080;

    app.listen(PORT, () => {
        console.log(`Server is running on port${PORT}.`);
    });

