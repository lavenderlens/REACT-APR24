const listings = { listings: [] };
class Listing {
  constructor(price, picUrl, picAlt, details) {
    this.price = price;
    this.picUrl = picUrl;
    this.picAlt = picAlt;
    this.details = details;
  }
  getPrice = () => {
    return this.price; //arrow function has no context of "this"
    // works because next scope level up is the clsass itself
    // so context of "this" defaults to the class
  };
}

const listing1 = new Listing(
  865000,
  "https://media.rightmove.co.uk/dir/crop/10:9-16:9/35k/34694/145342964/34694_AHS240034_IMG_00_0000_max_476x317.jpeg",
  "Albert Road, Ashford, Kent, TN24",
  "Remind me to thank John for a lovely weekend. What do they got in there? King Kong? You know what? It is beets. I've crashed into a beet truck. Hey, you know how I'm, like, always trying to save the planet? Here's my chance. You know what? It is beets. I've crashed into a beet truck."
);

const listing2 = new Listing(
  785000,
  "https://media.rightmove.co.uk/dir/crop/10:9-16:9/35k/34694/145568495/34694_ACH240015_IMG_00_0000_max_476x317.jpeg",
  "Lime Grove, Ashford, Kent, TN24",
  "God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. I gave it a cold? I gave it a virus. A computer virus. My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!"
);

console.log(listing1.getPrice());
console.log(listing2.getPrice());
