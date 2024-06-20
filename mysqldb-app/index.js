const express = require("express");
const app = express();

require("dotenv").config();

let userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

let dbConnect = require("../mysqldb-app/dbConnect")
// parse requests of content-type - application/json
app.use(express.json());


    app.get("/", (req, res) => {
        res.json({ message: "Welcome to mySQLDB application." });
    });


// set port, listen for requests
const PORT = process.env.PORT || 8080;

    app.listen(PORT, () => {
        console.log(`Server is running on port${PORT}.`);
    });

