import express from "express";
import employeeRouter from "./api/employee.js";

const app = express();

app.use(express.json());

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.use("/employees", employeeRouter);

//catch all error handle
app.use((err, req, res, next) => {
  res.status(500).send("Database error occurred");
});

export default app;
