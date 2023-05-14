const express = require('express');
const router = express.Router();
const Employee = require('./models/employees');

// Welcome page
router.get("/", async (req, res) => {
  try {
    res.send("Welcome to Icecream Factory employees register!")
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
})

// Fetch all employees
router.get("/employees/getall", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.send(employees)
  } catch(err) {
    return res.status(500).json({ message: err.message });
  }
})
// Fetch employee by id
router.get('/employees/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Employee.findById(id);
        res.status(200).json(Employee);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
// Add epmloyees
router.post("/employees/add", async (req, res) => {
    const employee = new Employee({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        department: req.body.department,
        startdate: req.body.startdate,
        salary: req.body.salary,
    });
  
    try {
      const newEmployee = await employee.save();
      res.status(201).json({ newEmployee });
    } catch(err) {
      return res.status(500).json({ message: err.message });
    }
  })
  // Delete employees by id
router.delete('/employees/delete/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Employee.findByIdAndDelete(id);
        if(!Employee){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.status(200).json(Employee);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
// Update emploees by id
router.put("/employees/update/:id", async (req, res) => {
    await Employee.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true}, (err, result) => { 
      if (err){ 
        return res.status(500).json({ message: err.message });
      } 
      else{ 
        res.status(200).json({ result });
      } 
    }); 
  })
module.exports = router;
