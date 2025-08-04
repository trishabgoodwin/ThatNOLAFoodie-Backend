import express from "express";
const app = express();
export default app;
import cors from "cors";

app.use(cors());
app.use(express.json())

app.route('/').get((req,res)=>{
    res.send("Welcome to the home page!")
})

app.use((err,req,res,next)=>{
    console.log(err)
    res.status(500).send("An error occured " + err)
})