import mongoose from "mongoose";

const companySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        owner: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        numEmp: {
            type: Number,
            required: true,
        },
        contact: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export const Company = mongoose.model('company', companySchema);