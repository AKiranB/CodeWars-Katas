// sum of all multiples of 3 or 5 below the inputted 'number'

// function solution(num) {

//     let total = 0;

//     for (let i = 0; i < num; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             total += i;
//         }
//         if (i % 15 === 0) {
//             total - 1
//         }

//     }
//     return total;
// }





// remove all vowels from a string, return inputted string

// function disemvowel(str) {

//   const splitStr = str.split("");

//   for (let i = 0; i < splitStr.length; i++) {
//     if ((splitStr[i].toLowerCase() === 'a') || (splitStr[i].toLowerCase() === 'o') || (splitStr[i].toLowerCase() === 'u') || (splitStr[i].toLowerCase() === 'i') || (splitStr[i].toLowerCase() === 'e')) {

//       splitStr.splice([i], 1);

//     }
//   }

//   return splitStr.join("")
// }


// console.log(disemvowel("This website is for losers LOL!"))







//* check whether sentence has all letters of the alphabet

// console.log(disemvowel("This website is for losers LOL!"))

// function isPangram(string) {

//     const stringLower = string.toLowerCase();
//     const letters = stringLower.match(/[a-z]/g);
//     const uniques = new Set(letters);

//     if (uniques.size === 26) {
//         return "is a Pangram"
//     } else {

//         return "not a Pangram"
//     }

// }





//*replicate facebooks like function

// function likes(names) {
//     if (names.length === 0) {
//         return 'No one likes this';
//     }
//     else if (names.length === 1) {

//         return `${names[0]} like this`;

//     } else if (names.length === 2) {

//         return `${names[0]} and ${names[1]} like this`;

//     } else if (names.length === 3) {

//         return `${names[0]}, ${names[1]} and ${names[2]} like this`

//     } else if (names.length >= 4) {

//         return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
//     }


// }

// const names = ["Jacob", "Alex"]
// const names2 = ["Max", "John", "Mark"]
// const names3 = ["Alex", "Jacob", "Mark", "Max"]

// console.log(likes(names))
// console.log(likes(names2))
// console.log(likes(names3))




// const tickets = (peopleInLine) => {

//   // object storing bills on hand 25 - 50
//   const bills = { 25: 0, 50: 0 };
//   const result = peopleInLine.every(person => {

//     switch (person) {
//       case 25:
//         bills[25]++;
//         return true;

//       case 50:
//         if (bills[25] > 0) {
//           bills[25]-- && bills[50]++
//           return true
//         } else {
//           return false
//         }

//       case 100:
//         if (bills[25] > 0 && bills[50] > 0) {
//           bills[25]-- && bills[50]--;
//           return true
//         } else if (bills[25] >= 3) {
//           bills[25] -= 3;
//           return true
//         } else {
//           return false
//         }

//     }

//   })
//   return result ? "YES" : "NO"
// }


// function tickets(peopleInLine) {

//   const bills = { 25: 0, 50: 0, 100: 0 }

//   if (peopleInLine[0] !== 25) {
//     return 'NO'
//   }

//   for (let i = 0; i < peopleInLine.length; i++) {
//     if (peopleInLine[i] === 25) {
//       bills[25] += 1;
//     } else if (peopleInLine[i] === 50) {
//       if (bills[25] === 0) {
//         return 'NO';
//       } else {
//         bills[25] -= 1;
//       }
//     } else if (peopleInLine[i] === 100) {
//       if ((bills[25] < 3 && bills[50] === 0) || (bills[25] === 0 && bills[50] > 1)) {
//         return 'NO';
//       } else if (bills[25] >= 3) {
//         bills[25] -= 3
//       } else if (bills[25] > 0 && bills[50] > 0) {

//         bills[25]--;
//         bills[50]--;
//       }
//     }
//   }
//   return 'YES'

// }













// const peopleInLine1 = [25, 25, 50, 50]
// const peopleInLine2 = [25, 100];
// const peopleInLine3 = [25, 25, 50, 50, 100];

// console.log(tickets(peopleInLine1))
// console.log(tickets(peopleInLine2))
// console.log(tickets(peopleInLine3))



function disemvowel(str) {
  let disemvoweledStr = (str.replace(/A|E|O|I|U|a|e|o|i|u/g, ''));

  return disemvoweledStr
}

console.log(disemvowel("This website is for losers LOL!"));

