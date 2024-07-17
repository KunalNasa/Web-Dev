import mongoose from "mongoose";
const employeeSchema = new mongoose.Schema({
    name : String,
    salary : Number,
    city : String,
    languages : String,
    isManager : Boolean
  });

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;