const accountId = 144553;
let accountEmail = "pranitmaheskar@gmail.com";
var accountPassword = "12345";
accountCity = "Nagpur";
let accountstate;

// accountId = 2; // Not allowed  
accountEmail = "pm@pm.com";
accountPassword = "21212121";
accountCity = "umred";

console.log(accountId);

/*
Perfer not used to var because of issus in block scope and fuctional scope
*/

// Ek saath saare variables ko table format mein dekhne ke liye:
console.table([accountId, accountEmail, accountPassword, accountCity, accountstate]);
