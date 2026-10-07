const employees = [
  { id: 1, name: "Carolynn McGinlay" },
  { id: 2, name: "Lodovico Filon" },
  { id: 3, name: "Jefferey Wahlberg" },
  { id: 4, name: "Kayley Tures" },
  { id: 5, name: "Rickard Carver" },
  { id: 6, name: "Michael Stryde" },
  { id: 7, name: "Averell Santino" },
  { id: 8, name: "Constantina Connue" },
  { id: 9, name: "Verile Bondesen" },
  { id: 10, name: "Gwen Grollmann" },
];

/* WARNING: this must remain the default export in order for the tests to work! */

export const getEmployees = () => {
  return employees;
};

export function getEmployeeId(id) {
  return employees.find((e) => e.id === parseInt(id));
}

export function getRandomEmployee() {
  const randomIndex = Math.floor(Math.random() * employees.length);
  return employees[randomIndex];
}

export const addEmployee = (mon) => {
  const lastEmployee = employees[employees.length - 1];
  const newEmployee = { id: lastEmployee.id + 1, ...mon };
  const employee = employee.find((emp) => emp.id === Number(id));

  employees.push(newEmployee);

  return newEmployee;
};

export default employees;
