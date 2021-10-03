import * as mongoose from "mongoose";


export const StudentsSchema = new mongoose.Schema({
     ID: Number,
     Name: String,
     Color: String,
     Eyes: String,
     EyeType: String
})