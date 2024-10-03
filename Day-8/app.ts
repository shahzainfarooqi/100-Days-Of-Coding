// Question 22
let progLang: string[] = ['JavaScript', 'Python', 'Php', 'Java'];
let invalid_index = progLang[3];
if (progLang.length > 3) {
    let valid_index = progLang[3];
    console.log("language at index 3: ", valid_index);
} else {
    console.log("Invalid index access. The array lenght is:", progLang.length);
}

// Question 23
//Comparison Operator
let car: string = 'Supra Mk4'
console.log("Is car == 'Supra Mk4'? I predict True.");
console.log(car == 'Supra Mk4');

console.log("Is car == 'kawasaki'? I predict False.");
console.log(car == 'kawasaki');

// Question 24
console.log("Is five grater than 4? I predict True.");
console.log(5 > 4);

console.log("Is 10 less than 20? I predict True.");
console.log(10 < 20);

console.log("Is mango start with n? I predict False.");
console.log("mango".startsWith("n"));

console.log("Is mango end with o? I predict True.");
console.log("mango".endsWith("o"));

console.log("Is mango contain t? I predict False.");
console.log("mango".includes("t"));

console.log("Is true && false? I predict False.");
console.log(true && false);

console.log("Is true || false? I predict True.");
console.log(true || false);

console.log("Is false ? I predict False.");
console.log(false);
