const { json } = require("express");
const express = require("express");
const vehicles = require("./routes/vehicles");


const app = express();

app.use(express.json());

app.use("/vehicles", vehicles);

app.listen(8000, () => console.log(`Server running at port 8000...`));


