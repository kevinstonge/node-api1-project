const shortid = require("shortid");
exports.users = [
    {
        id: shortid(), // hint: use the shortid npm package to generate it
        name: "Jane Doe", // String, required
        bio: "Not Tarzan's Wife, another Jane",  // String, required
    }
]