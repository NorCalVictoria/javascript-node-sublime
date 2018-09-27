// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];




function accountHolderDetails(accountHolder, accountNumber, businessName) {
  console.log('accountHolder: ' + accountHolder);
  console.log('accountNumber: ' + accountNumber);
  console.log('businessName: ' + businessName);
}

accountHolderDetails('Balloonicorn', '12345', 'Balloonicorn\'s Cupcake Shop');


// Add some phone numbers to our map
const phoneNumbers = new Map([
  ['home', '510-867,5309'],
  ['mobile', '415-555-1212'],
  ['business','415-123-4567']
  ]);
phoneNumbers.keys()





// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 


// Add function to print all addresses, including a header
function showAddresses(arr){
 
  console.log('Addresses:', arr);

}


showAddresses(['123 sutter street','683 sutter street', '1600 pennsylvania ave']);


// Add function to print phone types and numbers


function showPhoneNums(phoneNums){
  console.log(phoneNumbers.entries());
}

showPhoneNums(phoneNumbers);


// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions

const accountTransaction = new Map()
// Add function to add transactions

accountTransaction.set('May-2', -500);
accountTransaction.set('May-13', +1200);
accountTransaction.set('May-15', -100);
accountTransaction.set('May-21', -359);
accountTransaction.set('May-29', +2200);

console.log(accountTransaction.entries());
// Use the function to add transactions

let add = (accountTransaction.values());
let balance = 0;
// console.log(balance); 
console.log(add);
console.log(typeof(add));

for (let keyValue of accountTransaction){
  balance = balance + keyValue[1]

}
console.log(balance);  



// Add function to show balance status

if (balance < 0 ){
  console.log('You are overdrawn.');
} else if (balance > 0 &&  balance < 20) {
  console.log('Warning you are close to zero balance.');

}else{
  console.log('Thank you for your business.');
}


// Add function to show transactions
function showTransactions(begin_bal,transactions){

  console.log('starting bal: $',begin_bal);
  let value = begin_bal

  for (let keyValue of transactions){
    console.log(keyValue[0], keyValue[1], value = value + keyValue[1]);
  }


}
showTransactions(26000,accountTransaction);

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




