console.log("Hello World");
import express from "express";
const app = express();



const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});
app.get("/health", (req, res) => {
    res.status(200).send({statusCode: 200, message: "Welcome to the openshift using Node.js"});
});
app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});