const express = require("express");
const users = require("./users.js").users;
const server = express();
const cors = require("cors");
server.use(cors());
const shortid = require("shortid");

server.get("/api/users", (req, res) => {
    res.status(200).json(users);
});

server.post("/api/users", (req, res) => {
    const { name, bio } = req.body;
    if (name && bio) {
        users = [
            ...users,
            {
                id: shortid(),
                name,
                bio,
            }
        ]
        res.status(200).json(users);
    }
    else {
        res.status(400).json({errorMessage: "Please provide a name and a bio for the user"});
    }
});

server.listen(5000, () => {
    console.log('listening')
});