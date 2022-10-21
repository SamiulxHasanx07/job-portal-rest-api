const { createJobService, getAllJobService, getSingleJob, updateJob } = require("../services/job.service");

exports.publishJob = async (req, res, next) => {
    try {
        const result = await createJobService(req.body);
        res.status(200).json({
            status: "success",
            message: "Successfully posted new job!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Something went wrong, please check and try again",
            error: error.message
        })
    }
}

exports.getAllJobList = async (req, res, next) => {
    try {
        const result = await getAllJobService();
        if (!result.length) {
            res.status(400).json({
                status: "Failed",
                message: "Something wrong check and try again",
                data: result
            })
        }
        res.status(200).json({
            status: "success",
            message: `Total job found ${result.length}`,
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Something went wrong, please check and try again",
            error: error.message
        })
    }
}


exports.getSingleJob = async (req, res, next) => {
    try {
        const result = await getSingleJob(req.params.id);

        if (!result.jobName) {
            res.status(400).json({
                status: "Failed",
                message: "Something wrong check and try again",
                data: result
            })
        }

        res.status(200).json({
            status: "success",
            message: `Here is ${result.jobName} job!`,
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Something went wrong, please check and try again",
            error: error.message
        })
    }
}

exports.updateJob = async (req, res, next) => {
    try {
        const result = await updateJob(req.params.id, req.body)
        if (!result.modifiedCount) {
            res.status(400).json({
                status: "Failed",
                message: "Something wrong check and try again",
            })
        }
        res.status(200).json({
            status: "success",
            message: "Successfully Updated Job",
            result
        })
    } catch (error) {

        res.status(400).json({
            status: "failed",
            message: "Something went wrong, please check and try again",
            error: error.message
        })
    }
}