/*
huh i forgot to tell everyone this-
so since we needed to use `jest` which is an npm library, we had to `npm init` and `npm i jest`
we'll elaborate more on this later on but when we do `npm i jest`, a `node_modules` folder appears
dont worry about node_modules too much yet, but the important thing to know is that node_modules does NOT belong in your github repo

"how do we remove node_modules from our github repo?"
1. rm -rf node_modules
2. git add .
3. git commit -m 'removed node_modules'
4. git push

"how do we ignore node_modules from being into our github repo while still keeping it in our local computer?"
1. touch .gitignore # this creates a file called .gitignore
2. open your .gitignore
3. add "node_modules" to the first line. literally .gitignore would be a file that only has the word "node_modules" in it (without quotes)

"what is .gitignore?"
a file. you can put file names or folder names in this file. all files/folders that are listed in the file will be ignored when you push to your github repo
i added a .gitignore file into this pull request so you can see what it looks like
*/

// make sure you use const or let to initialize these variables! all variables should be initialized using const or let
// i only didnt do it in the gist because i was showing you what the data should look like hehe
moneyThatUserHas = 100;
vendingMachine = [
    { snack: 'Snickers', quantity: 10, price: 1.50 },
    { snack: 'M&Ms', quantity: 5, price: 1 },
    { snack: 'Sour patch', quantity: 15, price: 3 },
];

const addSnackToVendingMachine = (snack, quantity, price) => {
    vendingMachine.push({ snack, quantity, price });
};

/nice!
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

// nice!
function displayVendingMachine() {
    vendingMachine.forEach((snackItem, index) => {
        console.log(`${index + 1}. ${snackItem.quantity} ${snackItem.snack}: $${snackItem.price} each`)
    })

    // alternatively:
    // for (let i = 0; i < vendingMachine.length; i++) {
    //     console.log(`${i + 1}. ${vendingMachine[i].quantity} ${vendingMachine[i].snack}: $${vendingMachine[i].price} each`)
    // }
}

// nice! try to do this with ONLY the reduce method and no for loop :D
function getTotalPriceOfAllVendingMachineItems() {
    const totalPrice = [];
    for (let i = 0; i < vendingMachine.length; i++) {
        const snackSelected = vendingMachine[i];

        totalPrice.push(snackSelected.quantity * snackSelected.price);
    }

    return totalPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

// beautiful! try to use an array method to achieve this hehe
function getNamesOfAllSnackItems() {
    const allSnackNames = [];

    for (const item of vendingMachine) {
        allSnackNames.push(item.snack)
    }
    return allSnackNames;
}

// A+
function getAllSnacksUnderTwoDollars() {
    return vendingMachine.filter((snackItem) => snackItem.price < 2);
}

// A+A+A+A+
// i didnt teach this yet but there's an `array.includes()` method
// try looking up the docs and figuring out how to use it here
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
