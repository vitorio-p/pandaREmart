import breadImage from "./img/bread.jpeg";
import eggImage from "./img/dasoon-eggs.webp";
import milkImage from "./img/meiji-2l-milk.png";
import cheeseImage from "./img/cheese.webp"
import laysImage from "./img/lays.webp"

export const storeMock = {
  items: [
    {
      id: 0,
      name: "Dasoon Premium Fresh Egg 15S",
      price: 5,
      image: eggImage,
      quantity: 1,
    },
    {
      id: 1,
      name: "Meiji Fresh Milk 2L",
      price: 7,
      image: milkImage,
      quantity: 1,
    },
    {
      id: 2,
      name: "Gardenia Jumbo 600 Enriched White Bread",
      price: 3,
      image: breadImage,
      quantity: 1,
    },
    {
      id: 3,
      name: "Kraft Dairylea Cheese Singles",
      price: 9.35,
      image: cheeseImage,
      quantity: 1,
    },
    {
      id: 4,
      name: "Lay's Potato Chips Classic",
      price: 5.3,
      image: laysImage,
      quantity: 1,
    },
  ],
  others: {
    subtotal: 0,
    deliveryFee: 2,
    total: 0,
  },
};
