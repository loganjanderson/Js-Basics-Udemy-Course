// let temp = 129

// if (temp >= 60 && temp <= 90) {
//     console.log('It is pretty nice out!');
// }

// if (temp <= 0 || temp >= 120) {
//     console.log('do not go outside!');
// }


// Challenge Vegan Menu 

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Use 2 Vegan Menus');
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Use 1 Vegan Menu');
} else {
    console.log('No need for Vegan Menus');
}
