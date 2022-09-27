let students =
    [{ fName: "Sheldon", lName: "Ferguson", age: 12 },
    { fName: "John", lName: "Doe", age: 16 },
    { fName: "Candice", lName: "Lewis", age: 20 }]

let greeting = `Hello, my name is 
${students[1].fName} ${students[1].lName} and i'm 
${students[1].age} years old.`
console.log(greeting)