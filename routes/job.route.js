const express = require("express");
const jobController = require("../controllers/job.controller");
const router = express.Router();

router.route("/")
    .get(jobController.getAllJobList)
    .post(jobController.publishJob);

router.route("/:id")
    .get(jobController.getSingleJob)
    .patch(jobController.updateJob)

module.exports = router;
