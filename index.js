console.log("Hello World");
import express from "express";
const app = express();

app.use(express.json());


const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});
app.get("/health", (req, res) => {
    res.status(200).send({statusCode: 200, message: "Welcome to the openshift using Node.js"});
});
app.post('/child-onboarding', (req, res)=>{
    const {name, age, gender} = req.body;
    console.log('REceived body', req.body);
    if(!name || !age || !gender){
        return res.status(400).send({statusCode: 400, message: "Name, age and gender are required"});
    }
    res.status(200).send({statusCode: 200, message: "Child onboarded successfully"});
})
app.listen(PORT,'0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});