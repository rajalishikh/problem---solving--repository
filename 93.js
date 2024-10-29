// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function office_Calculation(information_employee){
    let total_salary_provided=0;

    for(let employee of information_employee){
        let employee_total_salary=(employee.experience * employee.increment)+employee.starting;
        
        total_salary_provided=total_salary_provided+employee_total_salary
    }
    console.log('The total salary has to be provided by the company in a month is',total_salary_provided)
}
office_Calculation(employees)