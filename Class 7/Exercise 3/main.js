drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
  ];

const drinksByPrice = drinks.sort((a, b) => a.price - b.price);
console.log("drinksByPrice:", drinksByPrice);