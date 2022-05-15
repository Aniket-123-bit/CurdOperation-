// const book =  [
//     { ID: '1', Book_Name: 'Computer Architecture', Category: 'Computers', Price: 125.60 },
//     { ID: '2', Book_Name: 'Java  Book', Category: 'Programming', Price: 56.00 },
//     { ID: '3', Book_Name: 'Data Science', Category: 'Science', Price: 210.40 }
// ]
// console.log(book);

// //create item book
// const newItem = [
//     { ID: '4', Book_Name: 'I/p Architecture', Category: 'Computers i/p', Price: 225.60}
// ]

// book.push(newItem)
// //console.log(newItem);
// const createList = book.concat([newItem]);
// console.log(createList);

// //update
// const itemIndex = 1
// const Item = "ID: '2' (updated)"

// const newList = book.map((ID, index) => {
//   return index === itemIndex ? newItem : ID
// })
// console.log(Item);
// console.log(newList);

// //delete
// const Index = 1

// const bookList = book.filter((ID, index) => {
//   return index !== Index
// })
// console.log(bookList);

//Armstrong number
var prompt = require('prompt-sync')();
let num =0;
const number=prompt('Enter the three digit Number:');
//create a temp variable
let temp=number;
while(temp>0){
  let remainder=temp%10;
  num +=remainder*remainder*remainder;
  //remove last digit
  temp=parseInt(temp/10);
}
//check condition
if(num == number){
  console.log(`${number} is an Armstrong number`);
}else{
  console.log(`${number} is not Armstrong number`);

}
