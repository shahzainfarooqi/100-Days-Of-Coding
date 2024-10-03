// Question 02:
var studentName = 'Rameez Ramzy';
console.log("Hello! ".concat(studentName, " Would you like to learn some TypeScript today?"));
// Question 03:
var userName = 'Rameez sheikh';
//Convert into LowerCase:
var lowerCaseName = userName.toLowerCase();
console.log('LowerCase:', lowerCaseName);
//Convert into UpperCase:
var upperCaseName = userName.toUpperCase();
console.log('UpperCase', upperCaseName);
//Convert into titleCase:
var titlecaseName = userName.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
console.log("TitleCase: ", titlecaseName);
