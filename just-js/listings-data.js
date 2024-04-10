// price
// picture url
// picture alt
// details title
// details details

let nextId = 1;
const listings = { listings: [] };
function createListing(price, picUrl, picAlt, details) {
  this.price = price;
  this.picUrl = picUrl;
  this.picAlt = picAlt;
  this.details = details;
  this.id = nextId++;
}
// var listing1 = new createListing(
//   865000,
//   "https://media.rightmove.co.uk/dir/crop/10:9-16:9/35k/34694/145568495/34694_ACH240015_IMG_00_0000_max_476x317.jpeg",
//   "Lime Grove, Ashford, Kent, TN24",
//   "God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. I gave it a cold? I gave it a virus. A computer virus. My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!"
// );//testing

listings.listings.push(
  new createListing(
    865000,
    "https://media.rightmove.co.uk/dir/crop/10:9-16:9/35k/34694/145342964/34694_AHS240034_IMG_00_0000_max_476x317.jpeg",
    "Albert Road, Ashford, Kent, TN24",
    "Remind me to thank John for a lovely weekend. What do they got in there? King Kong? You know what? It is beets. I've crashed into a beet truck. Hey, you know how I'm, like, always trying to save the planet? Here's my chance. You know what? It is beets. I've crashed into a beet truck."
  )
);
listings.listings.push(
  new createListing(
    785000,
    "https://media.rightmove.co.uk/dir/crop/10:9-16:9/35k/34694/145568495/34694_ACH240015_IMG_00_0000_max_476x317.jpeg",
    "Lime Grove, Ashford, Kent, TN24",
    "God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. I gave it a cold? I gave it a virus. A computer virus. My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!"
  )
);
listings.listings.push(
  new createListing(
    539995,
    "https://media.rightmove.co.uk/dir/crop/10:9-16:9/204k/203441/126501935/203441_138912-1_IMG_00_0000_max_476x317.jpeg",
    "Magazine Road, Ashford, Kent, TN24",
    "I was part of something special. Must go faster... go, go, go, go, go! Hey, take a look at the earthlings. Goodbye! You really think you can fly that thing? God help us, we're in the hands of engineers. I was part of something special. Must go faster... go, go, go, go, go!"
  )
);
listings.listings.push(
  new createListing(
    625000,
    "https://media.rightmove.co.uk/dir/crop/10:9-16:9/48k/47904/143355017/47904_b9704983-920f-44e2-b129-e7a0ab37df40_IMG_00_0000_max_476x317.jpeg",
    "Canterbury Road, Ashford, Kent, TN24",
    "Checkmate... I was part of something special. Remind me to thank John for a lovely weekend. Jaguar shark! So tell me - does it really exist? Remind me to thank John for a lovely weekend. Just my luck, no ice. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?"
  )
);
listings.listings.push(
  new createListing(
    750000,
    "https://media.rightmove.co.uk/dir/crop/10:9-16:9/3k/2188/145249013/2188_12238498_IMG_01_0000_max_476x317.jpeg",
    "Malvern Road, Ashford, Kent, TN24",
    "God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. I gave it a cold? I gave it a virus. A computer virus. My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!"
  )
);

// console.log(listings.listings);

const json = JSON.stringify(listings);
console.log(json);

// storing data as JSON strings/objects

// const my_obj = { name: "Alan", age: 57, hobbies: ["Netflix", "restaurants"] };

// const my_json = JSON.stringify(my_obj);
// console.log(my_json);

// const my_people = { people: [] };

// my_people.people.push(my_obj);

// const my_people_json = JSON.stringify(my_people);
// console.log(my_people_json);
// //{"people":[{"name":"Alan","age":57,"hobbies":["Netflix","restaurants"]}]}

// const my_people_json_parsed = JSON.parse(my_people_json);
// for (let person of my_people_json_parsed.people) console.log(person);
