const mongoose = require("mongoose");
const validator = require("validator")
const { ObjectId } = mongoose.Schema.Types;
// Job Schema
const jobSchema = mongoose.Schema({
    jobName: {
        type: String,
        required: [true, "Please provide valid job name"],
        minLength: [5, "Name Must be at least 5 cahracters"],
        maxLenght: [256, "Name is too large"]
    },
    jobDescription: {
        type: String,
        required: [true, "Please provide valid job name"],
        minLength: [5, "Name Must be at least 150 cahracters"],
        maxLenght: [1000, "Name is too large"]
    },
    salary: {
        starts: {
            type: Number,
            required: true,
            min: [0, "Price value must be 0 or gater than 0"]
        },
        maximum: {
            type: Number,
            required: true,
            min: [0, "Price value must be 0 or gater than 0"]
        },
    },
    jobType: {
        type: String,
        required: [true, "job types must be engineering/food/agriculture/arts/architechture/education/government/helthcare/ICT"],
        enum: ["agriculture", "arts", "architechture", "education", "government", "helthcare", "ict"]
    },
    companyInfo: {
        name: {
            type: String,
            required: [true, "Please provide valid job name"],
            minLength: [3, "Company Name Must be at least 5 cahracters"],
            maxLenght: [256, "Company Name is too large"]
        },
        totalEmployee: {
            type: Number,
            default: 1
        }
    },
    location: {
        type: String,
        required: [true, "please provide job/office location"]
    },
    applies: {
        type: String,
        ref: "User",
        // requrired: true
    },
    createdBy: {
        type: String,
        validate: [validator.isEmail, "Please provide valid email"]
    }
}, {
    timestamps: true
})

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;