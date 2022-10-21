const express = require("express");
const app = express();
const cors = require("cors");

// middlewares
app.use(express.json());
app.use(cors());

const jobRoute = require('./routes/job.route');
app.use("/api/v1/jobs", jobRoute)


app.get("/", (req, res) => {
    res.send("Router Is working")
})

module.exports = app;