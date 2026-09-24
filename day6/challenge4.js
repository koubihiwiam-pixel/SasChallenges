let employee = {
    firstName: "Sara",
    lastName: "Amrani",
    salary: 7000,
    bonus: 1000,
    absenceDays: 2
};

function salairefinale (  ){
    let total = (employee.salary+employee.bonus)-(200*employee.absenceDays);
    return total;

}

let salairfinale = (employee.salary + employee.bonus)-(200*employee.absenceDays);
console.log(`Le salaire final est ${salairfinale} DH` );
console.log(`Le salaire final est ${salairefinale()} DH`);