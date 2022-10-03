// Variables

/* 
    Containers that store data in memory.
    - declaration
        * allows memory space to be reserved
        * declarations start let, var, or const
        * declarations cannot start with a number, or most characters other than $ or _
        * if no value is assigned, it's undefined
    - initilization
        * data value that is given to a variable declaration.
        * assigning it a value
        * can be any value or data type (str, int, array, fx, class, etc.)
        * can be reassigned (except for const)
*/

let firstName;
console.log(firstName)

let lastName = "Niemczyk"
console.log(lastName)

let age = 25
console.log(age)

console.log("----------------------")
console.log("Value of firstName before reassignment " + firstName)

// Reassignment
firstName = "Paul"
console.log(`Value of firstName after reassignment ${firstName}`)


// (a) (b)  (c)   (d)
var address = "123 Main St, Salem, MA"
console.log(address)
// (a) - keyword
// (b) - variable identifier
// (a) & (b) - variable declaration
// (c) - assignment operator
// (d) - value or initializer

const className = "SDB September 2022"
console.log(className)

// className = "New class" // TypeError: const cannot be reassigned

// console.log(`This is uppercase version of ${address.toUpperCase()}`)

// Below code console.logs ONLY what address would look like with .toUpperCase method acting on it.
console.log(address.toUpperCase())

// Below code reassigns the value of address variable to what .toUpperCase method returns when it acts on address value
address = address.toUpperCase()
console.log(address)

// Reassignment doesn't have to happen on original variable. What if we wanted a new variable that's a copy of the original variable but all uppercase?

let addressUC = address.toUpperCase()

console.log(addressUC)

//Coding Practices for Variables
/*  
    *be concise - (ex FirstName instead of usersFirstName)
    * be specific - (ex getValue instead of i)
    * Utilize CamelCase, snake_case, PascalCase, or skewer-case
    * YOu can also utilize nocase or SCREAMING_CASE
    ^ These are writing styles - each company will really decide their own
*/

//Challenge 
/* 
    Set a few variables:
    fName, lName, houseNumber, apt, Number (if applicable); street; city; state; post code.
    Once done, concatenate or interpolate them together into a new variable to create your address stamp.
    Console log that new variable
*/

let fName = "Matthew"
console.log(fName)

let lName = "O'Leary"
console.log(lName)

let houseNumber = "50"
console.log(houseNumber)

let streetName = "Weed Road"
console.log(streetName)

let cityName = "Essex Junction"
console.log(cityName)

let state = "Vermont"
console.log(state)

let nameplace = "Boston"
console.log(nameplace)

let fullAddress = (`My complete addres is ${houseNumber} ${streetName}, ${cityName}, ${state}.`)
console.log(fullAddress)



/*  */











