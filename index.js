// Write your solution in this file!

var customerName = 'bob'

const upperCaseCustomerName = () => customerName.toUpperCase

function setBestCustomer() {
    var bestCustomer = 'not bob'
    return bestCustomer
}


const overwriteBestCustomer = () => bestCustomer.shift;

const leastFavoriteCustomer = 'some initial value'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'blah'
    return leastFavoriteCustomer
}
