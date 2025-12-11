const restaurants = [
  {
    id: "chick-fil-a",
    name: "Chick-fil-A",
    address: "123 Comfort Ln, Foodville, USA",
    hours: "Mon-Sun: 6:30am - 10:00pm",
    rating: 4.6,
    characteristics: [
      "Family-friendly",
      "Drive-thru available",
      "Closed Sundays",
      "Consistent quality",
      "Quick service",
    ],
    menu: [
      { name: "Chicken Sandwich", price: "$4.99" },
      { name: "Waffle Fries", price: "$2.49" },
      { name: "Chocolate Milkshake", price: "$3.99" },
    ],
    reviews: [
      {
        author: "John D.",
        rating: 5,
        text: "Best chicken sandwich ever! Always hot and fresh.",
      },
      {
        author: "Sarah M.",
        rating: 4,
        text: "Great service but a bit pricey for fast food.",
      },
      {
        author: "Mike T.",
        rating: 5,
        text: "My favorite place. The waffle fries are incredible!",
      },
    ],
  },
  {
    id: "popeyes",
    name: "Popeyes",
    address: "45 Bayou Blvd, Spicetown, USA",
    hours: "Mon-Sun: 10:00am - 11:00pm",
    rating: 4.2,
    characteristics: [
      "Spicy options",
      "Bold flavors",
      "Quick service",
      "Value menu",
      "Casual atmosphere",
    ],
    menu: [
      { name: "Spicy Chicken Sandwich", price: "$5.49" },
      { name: "Cajun Fries", price: "$2.99" },
      { name: "Biscuits", price: "$1.99" },
    ],
    reviews: [
      {
        author: "Alex R.",
        rating: 5,
        text: "The spicy sandwich hits different. Love the heat!",
      },
      {
        author: "Emma L.",
        rating: 4,
        text: "Good flavor, sometimes inconsistent quality.",
      },
      {
        author: "Chris W.",
        rating: 4,
        text: "Biscuits are amazing. A bit messy though!",
      },
    ],
  },
  {
    id: "zaxbys",
    name: "Zaxby's",
    address: "88 Coop Ave, Ranch City, USA",
    hours: "Mon-Sun: 10:30am - 10:00pm",
    rating: 4.0,
    characteristics: [
      "Famous Zax sauce",
      "Tender chicken",
      "Southern charm",
      "Combo deals",
      "Fresh ingredients",
    ],
    menu: [
      { name: "Nibbler Combo", price: "$6.99" },
      { name: "Zax Sauce", price: "$0.00 (included)" },
      { name: "Crinkle Fries", price: "$2.29" },
    ],
    reviews: [
      {
        author: "Lisa P.",
        rating: 5,
        text: "The Zax sauce is addictive. Everything tastes better with it!",
      },
      {
        author: "Tom H.",
        rating: 4,
        text: "Great chicken quality. Portions are generous.",
      },
      {
        author: "Nina K.",
        rating: 3,
        text: "Good food but pricing is high compared to competitors.",
      },
    ],
  },
  {
    id: "churchs",
    name: "Church's Chicken",
    address: "9 Southern St, Comfort City, USA",
    hours: "Mon-Sun: 9:00am - 10:00pm",
    rating: 3.9,
    characteristics: [
      "Affordable prices",
      "Classic fried chicken",
      "Biscuits included",
      "No-frills service",
      "Value for money",
    ],
    menu: [
      { name: "Fried Chicken", price: "$4.79" },
      { name: "Honey-Butter Biscuit", price: "$1.49" },
      { name: "Mashed Potatoes", price: "$2.49" },
    ],
    reviews: [
      {
        author: "Robert M.",
        rating: 4,
        text: "Best budget-friendly fried chicken. Great biscuits!",
      },
      {
        author: "Karen S.",
        rating: 3,
        text: "Good value. Wish the atmosphere was nicer.",
      },
      {
        author: "Dave J.",
        rating: 4,
        text: "Classic chicken. Been eating here for years.",
      },
    ],
  },
  {
    id: "raising-canes",
    name: "Raising Cane's",
    address: "77 Finger St, Canetown, USA",
    hours: "Mon-Sun: 10:00am - 10:00pm",
    rating: 4.4,
    characteristics: [
      "Finger food focused",
      "Simple menu",
      "Fresh chicken",
      "Fast preparation",
      "Quality ingredients",
    ],
    menu: [
      { name: "Caniac Combo", price: "$7.99" },
      { name: "Crinkle-Cut Fries", price: "$2.29" },
      { name: "Texas Toast", price: "$1.49" },
    ],
    reviews: [
      {
        author: "Jessica T.",
        rating: 5,
        text: "Fresh and tasty! The combo is perfect for sharing.",
      },
      {
        author: "Brandon L.",
        rating: 5,
        text: "Consistently excellent. Never disappointed.",
      },
      {
        author: "Olivia N.",
        rating: 4,
        text: "Great chicken fingers but lines can be long.",
      },
    ],
  },
];

export default restaurants;
