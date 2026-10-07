import express from "express";
import employees, {
  getEmployees,
  getRandomEmployee,
  addEmployee,
  getEmployeeId,
} from "../db/employees.js";

const employeeRouter = express.Router();

employeeRouter
  .route("/")
  .get((req, res) => {
    res.send(employees);
  })

  .post((req, res) => {
    if (!req.body) {
      return res.status(400).send("Request must have a body.");
    }

    const { name } = req.body;
    if (!name) {
      return res.status(400).send("New employee must have a name");
    }

    //add employee
    const newEmployee = addEmployee(req.body);

    // send response with new employee
    res.status(201).send(newEmployee);
  });

// Note: this middleware has to come first! Otherwise, Express will treat
// "random" as the argument to the `id` parameter of /employees/:id.

employeeRouter.route("/random").get((req, res) => {
  const employee = getRandomEmployee();
  res.send(employee);
});

employeeRouter.route("/:id").get((req, res) => {
  const { id } = req.params;

  const employee = getEmployeeId(Number(id));

  // req.params are always strings, so we need to convert `id` into a number
  // before we can use it to find the employee

  if (!employee) {
    return res.status(404).send(`Employee #${id} not found.`);
  }

  res.send(employee);
});

export default employeeRouter;
