const express = require("express");
const app = express();

require("dotenv").config();

let userRoutes = require('./routes/userRoutes');
let commentRoutes = require('./routes/commentRoutes')
let postRoutes = require('./routes/postRoutes')
let likeRoutes = require('./routes/likeRoutes')

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/likes', likeRoutes);

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

