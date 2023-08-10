moneyThatUserHas = 100;
vendingMachine = [
    { snack: 'Snickers', quantity: 10, price: 1.50 },
    { snack: 'M&Ms', quantity: 5, price: 1 },
    { snack: 'Sour patch', quantity: 15, price: 3 },
];

const addSnackToVendingMachine = (snack, quantity, price) => {
    vendingMachine.push({ snack, quantity, price });
};

const buySnack = snack => {
    for (let i = 0; i < vendingMachine.length; i++) {
        const snackSelected = vendingMachine[i];

        if (snackSelected.snack === snack) {
            snackSelected.quantity--;
            moneyThatUserHas -= snackSelected.price;
        }
    }
    return moneyThatUserHas;
}

function displayVendingMachine() {
    vendingMachine.forEach((snackItem, index) => {
        console.log(`${index + 1}. ${snackItem.quantity} ${snackItem.snack}: $${snackItem.price} each`)
    })

    // alternatively:
    // for (let i = 0; i < vendingMachine.length; i++) {
    //     console.log(`${i + 1}. ${vendingMachine[i].quantity} ${vendingMachine[i].snack}: $${vendingMachine[i].price} each`)
    // }
}

function getTotalPriceOfAllVendingMachineItems() {
    const totalPrice = [];
    for (let i = 0; i < vendingMachine.length; i++) {
        const snackSelected = vendingMachine[i];

        totalPrice.push(snackSelected.quantity * snackSelected.price);
    }

    return totalPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}


function getNamesOfAllSnackItems() {
    const allSnackNames = [];

    for (const item of vendingMachine) {
        allSnackNames.push(item.snack)
    }
    return allSnackNames;
}

function getAllSnacksUnderTwoDollars() {
    return vendingMachine.filter((snackItem) => snackItem.price < 2);
}

const hasSnack = snack => {
    for (const snackItem of vendingMachine) {
        if (snackItem.snack === snack) return true;
    }
    return false;
}

module.exports = {
    moneyThatUserHas,
    addSnackToVendingMachine,
    getTotalPriceOfAllVendingMachineItems,
    buySnack,
    displayVendingMachine,
    getNamesOfAllSnackItems,
    getAllSnacksUnderTwoDollars,
    hasSnack,
  }