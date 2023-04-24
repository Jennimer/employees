var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EmployeesSchema = new Schema(
  {
     firstname: {type: String, required: true, maxlength: 50}, 
     lastname: {type: String, required: true, maxlength: 50},
     department: {type: String, required: true},
     startdate: {type: String, required: true},
     salary: {type: Number, required: true}
  }
);
//Export model
module.exports = mongoose.model('Employee', EmployeesSchema);