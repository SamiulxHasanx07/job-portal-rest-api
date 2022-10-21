const Job = require("../models/Job");

exports.createJobService = async (data) => {
    const result = await Job.create(data);
    return result;
}

exports.getAllJobService = async (id) => {
    const result = await Job.find({});
    return result;
}

exports.getSingleJob = async (id) => {
    const result = await Job.findById(id)
    return result;
}

exports.updateJob = async (id, data) => {
    const result = await Job.updateOne({ _id: id }, data)
    return result;
}