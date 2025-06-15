const accountId = 22022
let accountEmail = "ansh@gmail.com"
var accountPassword = "665544"
accountCity = "Vadodara"
let accountState;

// accountId = 55055 // This is not allowed

accountEmail = "ansh123@gmail.com"
accountPassword = "332211"
accountCity = "Ahmedabad"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/* 
    It is prefered not to use var
    bacause of issue in block scope and functional scope 
*/
