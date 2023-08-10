const { 
    moneyThatUserHas,
    addSnackToVendingMachine,
    getTotalPriceOfAllVendingMachineItems,
    buySnack,
    displayVendingMachine,
    getNamesOfAllSnackItems,
    getAllSnacksUnderTwoDollars,
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
      // snickers cost 1.50
      // moneyThatUserHas - snickers price is 99
      expect(moneyThatUserHas).toBe(98.5);
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