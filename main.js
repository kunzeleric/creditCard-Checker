// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above

const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

// Function to check if the Card is valid or not
function validateCred(array) {

    let sum = array[array.length - 1]
    let control = true
    let aux = 0

    // Always start on next-to-last card digit. Used luhn algorithm as suggested by Codeacademy
    // Every other number is multiplied by 2, if its result is higher than 9, then it reduces 9 and sums up to a variable
    // If the total sum % 10 == 0 then the card is valid
    for (i = array.length - 2; i >= 0; i--) {
        aux = array[i]
        if (control) {
            aux *= 2
            if (aux > 9) {
                aux -= 9
            }
        }
        sum += aux
        control = !control
    }
    if (sum % 10 === 0) {
        console.log("It's a valid card!")
        return true
    }

    else {
        console.log("It's an invalid card...")
        return false
    }

}

// Variable created out of scope so it can be called in another function
let invalidCards = []

// Function to store invalid cards into an array and return it
function findInvalidCards(batch) {
    // Calls function validateCred to check if card is valid or not, then stores it into an array if it's valid
    for (j = 0; j < batch.length; j++) {
        console.log(`Card number ${j + 1} checked.`)
        if (!validateCred(batch[j])) {
            invalidCards.push(batch[j])
            console.log(`Invalid card ${j + 1} added.`)
        }
    }
    return invalidCards
}

// Function to check which Companies invoiced the invalid cards
function idInvalidCardCompanies(invalidNumbers) {
    let invCompaniesCards = []
    let companies = ""
    let options = 0

    // Sweeps the array to read the first digit and associate with the right company
    for (i = 0; i < invalidNumbers.length; i++) {

        options = invalidNumbers[i][0]
        console.log(options)

        switch (options) {
            case 3: companies = 'American Express'
                break;
            case 4: companies = 'Visa'
                break;
            case 5: companies = 'MasterCard'
                break;
            case 6: companies = 'Discover'
                break;
            default: companies = 'Company not found'
        }
        // Tests if a company is already in the array, if it is then it does nothing, if its not then it adds to the array
        invCompaniesCards.indexOf(companies) >= 0 ? null : invCompaniesCards[i] = companies
    }
    console.log(invCompaniesCards)
    return invCompaniesCards
}

findInvalidCards(batch)
idInvalidCardCompanies(invalidCards)




