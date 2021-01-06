//Javscript Fundamentals

//Objects and Properties
var person = {
    name: "Maria Jones",
    age: 21.5,
    hasDriversLicence: true,
    dateOfBirth: "05/25/1994",
    address: {
        numAndStreet: "9201 University City Blvd",
        city: "Charlotte",
        state: "NC",
        country: "U.S.A"
    }
};

//prints the properties of the object person
log(JSON.stringify(person));

//prints the property name of the object person
log(person.name);

//prints more than one property in the object person
log(Object.values(person));

//Variables
var name = "Maria Santos";
var age = 21;
var hasDriversLicence = true;
var empty = undefined;

//prints out the data stored in the varirables
log(name + " type = " + typeof name);
log(age + " type = " + typeof age);
log(hasDriversLicence + " type = " + typeof hasDriversLicence);
log(empty + " type = " + typeof empty);

//Arrays
var toyBox = ["toy1", "toy2", "toy3"];

//prints out all of the items in an array
log(toyBox);

//prints out the item in position 1 of the array
log(toyBox[1]);

//prints out the length of the array (how many items are in it)
log(toyBox.length);

//loops through the array item by item
for(var n of names) {
    log(n);
}

names.forEach(function(n, index) {
    log(index + " - " + n);
});

//Arithmetic Operators
var addition = 2 + 2;
var subtraction = 4 - 3;
var multiplication = 3 * 3;
var division = 12 / 4;
var reminder = 5 % 2;