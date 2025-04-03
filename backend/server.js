const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

mongoose.connect("mongodb://mongo:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from Backend!" });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
