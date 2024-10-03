// Question 16
var guest_list = ["Brenden Erich", "Sam Altmen", "Elon Musk", "BillGates",];
console.log("".concat(guest_list, ":\n I have found bigger dinner table than i think to invite three more freinds"));
//adding three more freinds 
//at beginning;
guest_list.unshift("Ameen Alam");
//at Middle;
guest_list.splice(2, 0, "Guido van Rossum");
//at Last
guest_list.push("Adem freemen");
//Print all Guest alongwith message.       
for (var i = 0; i < guest_list.length; i++) {
    console.log("Mr ".concat(guest_list[i], " you are invited to my dinner"));
}
// Question 17
console.log("\n Table is not available, I can Invite only two persons. \n");
console.log(guest_list.length);
while (guest_list.length > 2) {
    var rm_guest = guest_list.pop();
    if (rm_guest) {
        console.log("Sorry Mr ".concat(rm_guest, " We have not enough Space, So you are not Invited Yet!\n"));
    }
}
console.log("The final two guest are:\n ".concat(guest_list));
for (var i = 0; i > guest_list.length; i++) {
    console.log("Dear! ".concat(guest_list[i], " You are still invited yet!"));
}
// Question 18
var favPlaces = ['Saudia Arabia', 'Malaysia', 'Iran', 'America', 'Turkey'];
console.log(favPlaces);
//Sorted
var sortPlaces = favPlaces.slice();
sortPlaces.sort();
console.log("Original Order:\n ".concat(favPlaces));
console.log("Sorted Order:\n ".concat(sortPlaces));
console.log("Still in its Original Order:\n ".concat(favPlaces));
//Reverse
var reversePlaces = favPlaces.slice();
reversePlaces = reversePlaces.reverse();
console.log("Original Order:\n ".concat(favPlaces));
console.log("Reverse Order:\n ".concat(reversePlaces));
favPlaces.reverse();
console.log("reverse: ".concat(favPlaces));
favPlaces.sort();
console.log("sorted: ".concat(favPlaces));
favPlaces.reverse();
console.log("reverse: ".concat(favPlaces));
