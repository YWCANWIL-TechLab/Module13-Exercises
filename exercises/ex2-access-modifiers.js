/**
 * This is an example of a class BankAccount that uses private properties to
 * protect the account balance from interference. 
 */
class BankAccount {
    
    #balance = 0;

    #accountId = -1;

    constructor(balance) {
        this.#balance = balance;
        this.#accountId = this.#accountId++;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(dollars) {
        this.#balance += dollars;
        return this.#balance;
    }

    withdraw(dollars) {
        this.#balance -= dollars;
        return this.#balance;
    }
}


/**
 * TODO Create a class Address with the following properties:
 *      1. streetAddress - A street address like - 1234 Dream St.
 *      2. city - A city that the street is in
 *      3. state - The state that the address is in
 *      4. zipCode - The zip code the address is in.
 * 
 * TODO Create the following methods:
 *      1. toString() - Should return the full address: streetName, city, state, zipCode
 * 
 * ! All of the properties should be private
 */
class Address {
    // TODO Finish the class
}

/**
 * TODO Using private and static variables, create a class Person with the 
 * TODO following properties:
 *      1. firstName - Represents a person's first name - Should be private
 *      2. lastName - Represents a person's last name - Should be private
 *      3. address - Represents a person's address - Should be private
 * 
 * TODO Create the following methods:
 *      1. toString() - Returns the person's full name and address.
 *      2. changeFirstName(name) - Changes the person's firstName
 *      3. changeLastName(name) - Changes the person's lastName
 */
class Person {
    // TODO Finish the class
}

/**
 * TODO Create a class Student that is the subclass of the Person class.
 * TODO Create it with the following properties:
 *      1. favoriteSubject - A string of the student's favorite subject (private)
 *      2. grade - A number representing the student's grade out of 100 (should be private)
 *      3. hasStudied - A boolean representing whether the student has studied or not (private)
 * 
 * TODO Create the following methods:
 *      1. study - sets the hasStudied property to true (should be private)
 *      2. takeExam - sets the grade property to a random number. If the student hasStudied,
 *                    add 15 to the grade property;
 *      3. getGrade - Returns the student's grade property.
 *      4. get favoriteSubject - Getter Method that returns Student's favorite subject (private)
 *      5. set favoriteSubject - Setter Method that changes Student's favorite subject (private)
 */
class Student {
    // TODO Finish the class
}


/**
 * TODO Create a class Animal with the following properties:
 *      1. name: a string of the animal's name (private)
 *      2. species: a string of the animal's species (private)
 * 
 * TODO Create the following methods:
 *      1. toString - Returns the Animal's name and species
 *      2. get name() - Getter method that returns the animal's name
 *      3. set name() - Setter method that changes the animal's name
 *      4. get species() - Getter method that returns the animal's species
 */
class Animal {
    // TODO Finish the class
}


/**
 * TODO Create a class Cat that is a subclass of Animal with the following properties:
 *      1. numberOfLegs - A number representing the number of legs the cat has. (private)
 *      2. favoriteSnack - A string representing the Cat's favorite snack (private)
 * 
 * TODO Create the following Methods:
 *      1. speak - Returns a string saying meow
 *      2. toString - Returns a string containing the cat's name, species, and favorite snack.
 */
class Cat {
    // TODO Finish the class
}











