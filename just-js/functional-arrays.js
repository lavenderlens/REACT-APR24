const listings = [
  {
    price: 865000,
    picUrl:
      "https://media.rightmove.co.uk/dir/crop/10:9-16:9/35k/34694/145342964/34694_AHS240034_IMG_00_0000_max_476x317.jpeg",
    picAlt: "Albert Road, Ashford, Kent, TN24",
    details:
      "Remind me to thank John for a lovely weekend. What do they got in there? King Kong? You know what? It is beets. I've crashed into a beet truck. Hey, you know how I'm, like, always trying to save the planet? Here's my chance. You know what? It is beets. I've crashed into a beet truck.",
    id: 1,
  },
  {
    price: 785000,
    picUrl:
      "https://media.rightmove.co.uk/dir/crop/10:9-16:9/35k/34694/145568495/34694_ACH240015_IMG_00_0000_max_476x317.jpeg",
    picAlt: "Lime Grove, Ashford, Kent, TN24",
    details:
      "God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. I gave it a cold? I gave it a virus. A computer virus. My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!",
    id: 2,
  },
  {
    price: 539995,
    picUrl:
      "https://media.rightmove.co.uk/dir/crop/10:9-16:9/204k/203441/126501935/203441_138912-1_IMG_00_0000_max_476x317.jpeg",
    picAlt: "Magazine Road, Ashford, Kent, TN24",
    details:
      "I was part of something special. Must go faster... go, go, go, go, go! Hey, take a look at the earthlings. Goodbye! You really think you can fly that thing? God help us, we're in the hands of engineers. I was part of something special. Must go faster... go, go, go, go, go!",
    id: 3,
  },
  {
    price: 625000,
    picUrl:
      "https://media.rightmove.co.uk/dir/crop/10:9-16:9/48k/47904/143355017/47904_b9704983-920f-44e2-b129-e7a0ab37df40_IMG_00_0000_max_476x317.jpeg",
    picAlt: "Canterbury Road, Ashford, Kent, TN24",
    details:
      "Checkmate... I was part of something special. Remind me to thank John for a lovely weekend. Jaguar shark! So tell me - does it really exist? Remind me to thank John for a lovely weekend. Just my luck, no ice. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?",
    id: 4,
  },
  {
    price: 750000,
    picUrl:
      "https://media.rightmove.co.uk/dir/crop/10:9-16:9/3k/2188/145249013/2188_12238498_IMG_01_0000_max_476x317.jpeg",
    picAlt: "Malvern Road, Ashford, Kent, TN24",
    details:
      "God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. I gave it a cold? I gave it a virus. A computer virus. My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!",
    id: 5,
  },
];
// Array.prototype.map() returns a new array from existing
// with a transformation for every element
const prices = listings.map((listing) => listing.price);
console.log(prices); //[ 865000, 785000, 539995, 625000, 750000 ]

// Array.prototype.filter() returns a new array from existing
// with a ONLY those elements from the original that pass a test (predicate function)
const pricesOver700k = prices.filter((price) => price > 700000); //comparison operator
console.log(pricesOver700k); //[ 865000, 785000, 750000 ]

// generally more performant to filter first on large datasets

// Array.prototype.reduce usually, though not always, returns a single value
// It does this by iterating through the array and comparing one element to the next (Comparator in Java)
const sumOfPricesOver700k = pricesOver700k.reduce(
  (previous, current) => previous + current
);
const averagePriceOver700k = sumOfPricesOver700k / pricesOver700k.length;
console.log(sumOfPricesOver700k);
console.log(averagePriceOver700k);

// map, filter, reduce can be chained together like java streams operators
const sumPricesOver700kInOneGo = listings
  .map((listing) => listing.price)
  .filter((price) => price > 700000)
  .reduce((previous, current) => previous + current);
console.log(sumOfPricesOver700k);
// the main thing is the original array is unaffected
// this is what we call functional programming - a paradigm, or way of working
// some array methods mutate, others don't.
// so FP is not down to syntax alone
// we treat all data as if it were immutable
// even though it may be mutable via certain methods
console.dir(listings);
