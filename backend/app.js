const express = require("express");
const cors = require("cors");
const router = require("./routers/router");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api",router);

app.listen(3000, function(){
    console.log("Servidor On!!!");
});

//db conexão
const conn = require("./db/conn");
conn();