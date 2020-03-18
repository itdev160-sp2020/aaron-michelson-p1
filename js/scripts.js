//beer price

  var beerPrice = 5.00
      hhDiscount = 0.50,
      hhbeerPrice = beerPrice - (beerPrice * hhDiscount),
      beerPriceEl = document.getElementByID('beer price'),
      hhbeerPriceEl = document.getElementByID('happy-hour beer price');

  beerPriceEl.textContent = beerPrice.toFixed(2);
  hhbeerPriceEl.textContent = hhbeerPrice.toFixed(2);

//wine price

  var winePrice = 6.00
      hhDiscount = 0.50,
      hhwinePrice = winePrice - (winePrice * hhDiscount),
      winePriceEl = document.getElementByID('wine price'),
      hhwinePriceEl = document.getElementByID('happy-hour wine price');

  winePriceEl.textContent = winePrice.toFixed(2);
  hhwinePriceEl.textContent = hhwinePrice.toFixed(2);

//cocktail price

  var cocktailPrice = 7.00
      hhDiscount = 0.50,
      hhcocktailPrice = cocktailPrice - (cocktailPrice * hhDiscount),
      cocktailPriceEl = document.getElementByID('cocktail price'),
      hhcocktailPriceEl = document.getElementByID('happy-hour cocktail price');

  cocktailPriceEl.textContent = cocktailPrice.toFixed(2);
  hhcocktailPriceEl.textContent = hhcocktailPrice.toFixed(2);

//snacks price

  var snacksPrice = 8.00
      hhDiscount = 0.50,
      hhsnacksPrice = snacksPrice - (snacksPrice * hhDiscount),
      snacksPriceEl = document.getElementByID('snacks price'),
      hhsnacksPriceEl = document.getElementByID('happy-hour snacks price');

  snacksPriceEl.textContent = snacksPrice.toFixed(2);
  hhsnacksPriceEl.textContent = hhsnacksPrice.toFixed(2);

