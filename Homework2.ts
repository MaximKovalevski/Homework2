//Task 1: Rectangle area calculation
let lengthRectangle: number = 5 // rectangle length
let widthRectangle: number = 4 // rectangle width
let areaRectangle: number = lengthRectangle * widthRectangle // calculate area
console.log('Area of rectangle is: ' + areaRectangle)

//Task 2: Body mass index (BMI) calculation:
let weight: number = 94 // weight in kilograms
let height: number = 1.84 // height in meters
let BMI: number = weight / (height * height) // calculate BMI
console.log('My BMI is: ' + BMI)

//Task 3: temperature converter
let celsius: number = 23 // temperature in Celsius
let fahrenheit: number = (9 / 5) * celsius + 32 // convert to Fahrenheit
console.log(celsius + '°C is equal to ' + fahrenheit + '°F')

//Task 4: Age checker
let age: number = 41//person's age
let isAdult: boolean = age >= 18 // check if age is 18 or above
console.log('Is adult ' + isAdult)

console.log(age + ' years man is ' + (age >= 18 ? 'adult' : 'young'))

//Task 5: strings concatenation
let firstName: string = 'Max' // first name
let lastName: string = 'Kovalevski' // last name
let fullName: string = firstName + ' ' + lastName // concatenate strings
console.log("Full name: " + fullName)

//Task 7: convert from string to number type
let stringNumber: string = '123' // numeric value as string
let convertedNumber: number = Number(stringNumber) //convert string to number
console.log('String value: ' + stringNumber)
console.log('Converted number: ' + convertedNumber)

//Task 8: convert from number to string type
let num: number = 555;
let str: string = num.toString();
console.log("number:", num);
console.log("string:", str);