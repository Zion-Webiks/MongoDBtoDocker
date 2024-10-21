const exp = require("express");
const dotenv = require("dotenv");
const { connectToMongo } = require("./dbConfig")

const app = exp();
dotenv.config();
connectToMongo()

const port = process.env.PORT || 1415;


app.use(exp.json());

app.listen(port, () => console.log("server up and runing on port " + port));