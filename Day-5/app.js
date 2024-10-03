// Question 13
var carMode = ["Supra Mk4", "vigo", "porshe", "Rolce Royce"];
for (var i = 0; i < carMode.length; i++) {
    console.log("I would like to own a ::".concat(carMode[i], ": Car"));
}
// Question 14
var dinner_guest = ["Brenden Erich", "Sam Altmen", "Elbert ainstien", "BillGates"];
for (var i = 0; i < dinner_guest.length; i++) {
    console.log("ASSALAM O ALAIKUM Mr. ".concat(dinner_guest[i], ", you are invited to join me for dinner. It would be an honor to have your company.\n"));
}
// Question 15
dinner_guest = ["Brenden Erich", "Sam Altmen", "Elbert ainstien", "BillGates",];
console.log("Due to some personal reasons Mr.".concat(dinner_guest[2], " will not come in my dinner "));
dinner_guest[2] = "Elon Musk";
console.log("New list of my Freinds who are coming to my dinner\n");
for (var i = 0; i < dinner_guest.length; i++) {
    console.log("".concat(i + 1, ". ").concat(dinner_guest[i]));
}
