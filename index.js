console.log("Hello World");
import express from "express";
const app = express();





app.get("/", (req, res) => {
    res.send("Hello World");
});
app.get("/health", (req, res) => {
    res.status(200).send({statusCode: 200, message: "Welcome to the openshift using Node.js"});
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});