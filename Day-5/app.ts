// Question 13
let carMode: string[] = ["Supra Mk4", "vigo", "porshe", "Rolce Royce"];
for (let i = 0; i < carMode.length; i++) {
    console.log(`I would like to own a ::${carMode[i]}: Car`);
}

// Question 14
let dinner_guest: string[] = ["Brenden Erich", "Sam Altmen", "Elbert ainstien", "BillGates"];
for (let i = 0; i < dinner_guest.length; i++) {
    console.log(`ASSALAM O ALAIKUM Mr. ${dinner_guest[i]}, you are invited to join me for dinner. It would be an honor to have your company.\n`);
}

// Question 15
dinner_guest = ["Brenden Erich", "Sam Altmen", "Elbert ainstien", "BillGates",];
console.log(`Due to some personal reasons Mr.${dinner_guest[2]} will not come in my dinner `);
dinner_guest[2] = "Elon Musk";

console.log(`New list of my Freinds who are coming to my dinner\n`)
for (let i = 0; i < dinner_guest.length; i++) {
    console.log(`${i + 1}. ${dinner_guest[i]}`);
}