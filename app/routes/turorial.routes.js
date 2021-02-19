module.exports = app => {
  const employees = require("../controllers/employee.controller.js");

  var router = require("express").Router();
  
  // Retrieve all Employee
  router.get("/", employees.findAll);

  // Create a new Employee
  router.post("/", employees.create);

 // Update a Employee
  router.put("/:id", employees.update);
  
   // Delete new Employee
  router.delete("/:id", employees.delete);
  
  // Retrieve a single Employee with id
  router.get("/:id", employees.findOne);

  app.use("/api/employees", router);
};
