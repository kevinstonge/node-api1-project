const express = require("express");
let users = require("./users.js").users;
const server = express();
const cors = require("cors");
server.use(cors());
server.use(express.json());
const shortid = require("shortid");
const { restart } = require("nodemon");

server.get("/api/users", (req, res) => {
    try {
        res.status(200).json(users);
    }
    catch (e) {
        res.status(500).json({errorMessage: "The user information could not be retrieved"})
    }
});

server.get("/api/users/:id", (req, res) => {
    try {
        const id = req.params.id;
        const match = users.filter(user => user.id === id);
        if (match.length === 1) { res.status(200).json(match) }
        else { res.status(404).json({message: `The user with id ${id} doesn't exist`})}
    }
    catch (e) {
        res.status(500).json({errorMessage: "The user information could not be retrieved"})
    }
});

server.post("/api/users", (req, res) => {
    try {
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
            res.status(201).json(users);
        }
        else {
            res.status(400).json({ errorMessage: "Please provide a name and a bio for the user" });
        }
    }
    catch (e) {
        res.status(500).json({errorMessage: "There as an error while saving the user to the database"})
    }
})

server.listen(5000, () => {
    console.log('listening')
});