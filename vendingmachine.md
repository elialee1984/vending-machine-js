# Vending Machine

## Part 1: MVP
You are in charge of creating a vending machine!  

The data structure for the vending machine should look something like this. We must also keep track of how much $ a customer has. Lets start the customer with $100. 
```js
moneyThatUserHas = 100;
vending machine would look something like [
  { snack: 'Snickers', quantity: 10, price: 1.50 },
  { snack: 'M&Ms', quantity: 5, price: 1 },
  { snack: 'Sour patch', quantity: 15, price: 3 },
]
```

Our vending machine requires several features. In addition, we must keep track of how much $ a customer has. Lets start the customer with $100. 
1. ```addSnackToVendingMachine(snack, quantity, price)```
    - Adds a `{ snack, quantity, price }` to the vending machine
    - Lets assume that there will not be duplicate snack names
      <details>
        <summary>Hints (dont look unless you're really stuck)</summary>

        Just push { snack, quantity, price } into the vendingMachine array
      </details>
    
2. ```buySnack(snack)```
    - Subtracts 1 from the snack quantity in the vending machine.
    - Subtracts the $ amount from the $ that user has
    - If the snack has 0 quantity, it should just console.log(`${snack} is out of stock`);
      <details>
        <summary>Hints (dont look unless you're really stuck)</summary>
  
        We need to do a few things here
        1. Find the snack in the array. You can just use a for loop for this
        2. Once we found the snack, subtract 1 from its quantity in the array
        3. Since we still have the snack, we can subtract the price from the user's money
        ```js
        const buySnack = (snack) => {
          for (const snackItem of vendingMachine) {
            console.log(snackItem); // { snack: 'Snickers', price: 1, quantity: 10 }
  
            // since snackItem is an object, you have to do snackItem.snack to get the name of the snack
            // compare the snackItem.name with the snack from the function arguments
            if (snackItem.snack === snack) {
              // subtract the price from the money that user has
              moneyThatUserHas -= snackItem.price;
  
              // since user just bought a snack, the quantity will be decremented
              snackItem.quantity--;
            }
          }
        }

        or if you just want to use a regular for loop with the indices
        for (let i = 0; i < vendingMachine.length; i++) {
          const snackItem = vendingMachine[i]; 
          // you can figure the rest out from here
        }
        ```
      </details>
      
3. `displayVendingMachineItems()`
    - Displays all the vending machine items in this format
    ```
    1. 10 Snickers: $1.50 each
    2. 5 M&Ms: $1 each
    3. 15 Sour patch: $3 each
    ```
    <details>
        <summary>Hints (dont look unless you're really stuck)</summary>
  
        for loop, or forEach the vendingMachine. try to use forEach for this. 

        vendingMachine.forEach((snackItem, index) => {

        });

    </details>
    
4. ```getTotalPriceOfAllVendingMachineItems()```
    - In our example, this would `return 65`
    - 10 snickers at 1.50 each => $15
    - 5 M&Ms at 1 each =>          $5
    - 15 sour patch at 3 each =>  $45
    - Add them all up =>          $65

    <details>
        <summary>Hints (dont look unless you're really stuck)</summary>
  
        Use .reduce. Please really try this problem. .reduce is definitely the most powerful array method.   
        Once you get good at it, you can do pretty much anything you want to an array. 

        return vendingMachine.reduce((accumulator, snackItem) => {
          // accumulator's default value is 0
          // snackItem is the item that we are iterating
        }, 0);

    </details>
    
5. ```getNamesOfAllSnackItems()```
    - In our example, this would `return ['Snickers', 'M&Ms', 'Sour patch'];`

    <details>
        <summary>Hints (dont look unless you're really stuck)</summary>
  
        use .map method
  
        return vendingMachine.map((snackItem) => {
          console.log(snackItem); // { snack: 'Snickers', price: 1, quantity: 10 }
        });

    </details>

6. ```getAllSnacksUnderTwoDollars()```
    - In our example, this would `return [{ snack: 'Snickers', quantity: 10, price: 1.50 }, { snack: 'M&Ms', quantity: 5, price: 1 }]`
    - 
    <details>
        <summary>Hints (dont look unless you're really stuck)</summary>
  
        I'm sure you can figure out which array method to use LOL
        array.SOMEARRAYMETHOD((snackItem) => {
          console.log(snackItem); // { snack: 'Snickers', quantity: 10, price: 1.50 }
          // if the price is <= 2, we want it
          // if the price is > 2, we do not want it
        });

    </details>
  
7. ```hasSnack(snack)```
    - If our vending machine has the snack, return true. if not, return false
    - If the snack's quantity is 0, also return false

## Part 2: Testing our code
Make sure you export the moneyThatUserHas and ALL of the functions that we have created.  

Here is a step-by-step for how to enable jest testing in our repo
1. run `npm init -y` in our terminal. This creates the `package.json` and `package-lock.json`
2. run `npm i jest` in our terminal. This just installs the `jest` package 
3. In our package.json, update the scripts to look like this
```js
"scripts": {
  "test": "jest"
},
```
4. run `npm test` in terminal. This will run all test specs that end in `.test.js`
5. Create a `vendingMachine.test.js` file. This will have all of our testing code.
6. Make sure you import the moneyThatUserHas and all of the functions into our `vendingMachine.test.js` file
  
## Code skeleton
<details>
  <summary>open me</summary>
  
  ```js
  vendingMachine.js
  
  const vendingMachine = [];

  // user has $100
  let moneyThatUserHas = 100;

  const addSnackToVendingMachine = (snack, quantity, price) => {

  }

  const buySnack = (snack) => {

  }

  const getTotalPriceOfAllVendingMachineItems = () => {

  }

  // i guess there's no good way to test this function using jest
  // you can just run the function and see if it console.logs what you want it to
  const displayVendingMachineItems = () => {

  }

  const getNamesOfAllSnackItems = () => {

  }

  const getAllSnacksUnderTwoDollars = () => {

  }

  const hasSnack = (snack) => {

  }

  // make sure you export all the things you want to test
  // do not export the vending machine. only test the functions
  module.exports = {
    moneyThatUserHas,
    addSnackToVendingMachine,
    getTotalPriceOfAllVendingMachineItems,
    buySnack,
    getNamesOfAllSnackItems,
    getAllSnacksUnderTwoDollars,
    hasSnack,
  }
  ```
  
  ```js
  vendingMachine.test.js
  
  // make sure you import all the things you want to test
  // do not import the vending machine. only test the functions
  const { 
    moneyThatUserHas,
    addSnackToVendingMachine,
    buySnack,
    getNamesOfAllSnackItems,
    getAllSnacksUnderTwoDollars,
    getTotalPriceOfAllVendingMachineItems,
    hasSnack,
  } = require('./vendingMachine');

  describe('Vending machine', () => {
    test('is able to add items', () => {
      const snack = 'Snickers';
      const price = 1;
      const quantity = 10;

      // add the item to the vending machine
      addSnackToVendingMachine(snack, quantity, price);

      expect(hasSnack(snack)).toBeTruthy();
    })

    test('allows user to buy items from the vending machine', () => {
      buySnack('Snickers');

      // moneyThatUserHas starts at 100
      // snickers cost 1
      // moneyThatUserHas - snickers price is 99
      expect(moneyThatUserHas).toBe(99);
    })

    test('gets the total price of all items', () => {

    })

    test('gets the names of all items', () => {
      // NOTE: YOU CANNOT COMPARE AN ARRAY WITH ANOTHER ARRAY (or an object to another object)
      // EXAMPLE `console.log([] === []) // false`
      // `console.log({} === {}) // false`

      // use this https://jestjs.io/docs/using-matchers#arrays-and-iterables as an alternative (ignore the Set part)
      // hint: imagine your vending machine looks like this
      // [{ snack: 'Snickers', quantity: 1, price: 1}]
      // your getNamesOfAllSnackItems should return ['Snickers'];
      // you can just check
      // expect(snackNames).toContain('Snickers');
      // expect(snackNames).not.toContain('M&Ms');
    })

    test('gets all snacks under $2', () => {
      // read the note from the above test spec
      // however, your getAllSnacksUnderTwoDollars should return 
      // [{ snack: 'Snickers', quantity: 1, price: 1}]
      // this is "bad practice" but you can loop expects
      /*
      const snacksUnderTwoDollars = getAllSnacksUnderTwoDollars();

      for (const snack of snacksUnderTwoDollars) {
        // btw DONT MEMORIZE ANY OF THESE MATCHERS
        // i dont know any of these matchers. i just google the one i need
        // for example, i know that we need to check if a number is <= 2
        // just google "jest less than or equal" and youll find toBeLessThanOrEqual
        // or you can do expect(price of snack <= 2).toBeTruthy();
        expect(price of snack).toBeLessThanOrEqual(2)
      }
      */
    })
  });
  ```
</details>
  
## How to submit
1. Create a github repo titled "vending-machine-js"
2. git add .
3. git commit -m 'a meaningful commit message'
4. ![img](https://i.imgur.com/QRyhFHB.jpeg) copy and paste this from YOUR OWN REPO. DONT TYPE THE ONE FROM THIS SCREENSHOT
5. DM the repo to me and alex and/or add us as collaborators if your repo is private

## How to add people as collaborator to your private repo
1. ![img](https://i.imgur.com/Mazt1zU.jpg)
2. ![img](https://i.imgur.com/2hlI16h.jpg)
3. my github is stannie-lim
4. alex's github is alexdemichieli
      
## Extra just to learn more
- Lets also add a function that sorts by the quantity! (and a test case for it)
    - For example, this would be the sorted vending machine
```js
[
  { snack: 'M&Ms', quantity: 5, price: 1 },
  { snack: 'Snickers', quantity: 10, price: 1.50 },
  { snack: 'Sour patch', quantity: 15, price: 3 },
]
```
- Inflation sucks. This vending machine is losing money! Lets remove the snacks that are worth < $1. For all the snacks that are >= $1, lets double their price
    - Example:
```js
[
  { snack: 'Snickers', quantity: 10, price: 3 }, // original price was 1.50
  { snack: 'Sour patch', quantity: 15, price: 6 }, // original price was 3
]
```
- Lets flex our knowledge a bit more. Remove all snacks < $1. For all snacks >= $1, double their price. Get me the new total price of all snacks in our vending machine
- You can come up with any combination you want LOL