// Question 16
let guest_list: string[] = ["Brenden Erich", "Sam Altmen", "Elon Musk", "BillGates",];
console.log(`${guest_list}:\n I have found bigger dinner table than i think to invite three more freinds`);

//adding three more freinds 
//at beginning;
guest_list.unshift("Ameen Alam");

//at Middle;
guest_list.splice(2, 0, "Guido van Rossum");

//at Last
guest_list.push("Adem freemen");

//Print all Guest alongwith message.       
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Mr ${guest_list[i]} you are invited to my dinner`);
}

// Question 17
console.log(`\n Table is not available, I can Invite only two persons. \n`);
console.log(guest_list.length)

while (guest_list.length > 2) {
    let rm_guest = guest_list.pop();
    if (rm_guest) {
        console.log(`Sorry Mr ${rm_guest} We have not enough Space, So you are not Invited Yet!\n`);
    }
}

console.log(`The final two guest are:\n ${guest_list}`);
for (let i = 0; i > guest_list.length; i++) {
    console.log(`Dear! ${guest_list[i]} You are still invited yet!`);
}

// Question 18
let favPlaces: string[] = ['Saudia Arabia', 'Malaysia', 'Iran', 'America', 'Turkey'];
console.log(favPlaces);

//Sorted
let sortPlaces = favPlaces.slice();
sortPlaces.sort();
console.log(`Original Order:\n ${favPlaces}`);
console.log(`Sorted Order:\n ${sortPlaces}`);
console.log(`Still in its Original Order:\n ${favPlaces}`);

//Reverse
let reversePlaces = favPlaces.slice();
reversePlaces = reversePlaces.reverse();
console.log(`Original Order:\n ${favPlaces}`);
console.log(`Reverse Order:\n ${reversePlaces}`);

favPlaces.reverse();
console.log(`reverse: ${favPlaces}`);

favPlaces.sort();
console.log(`sorted: ${favPlaces}`);

favPlaces.reverse();
console.log(`reverse: ${favPlaces}`);