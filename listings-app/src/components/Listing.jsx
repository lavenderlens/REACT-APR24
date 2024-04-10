// import Card from "./Card";
import PropertyPrice from "./PropertyPrice";
import PropertyPic from "./PropertyPic";
import PropertyDetails from "./PropertyDetails";
import PropertyLike from "./PropertyLike";
import "./listing.css";
const price = 300_000;
const url =
  "https://media.rightmove.co.uk/dir/crop/10:9-16:9/48k/47904/144091031/47904_a34a8a3e-5ee8-4a81-b806-ec9213e858e6_IMG_00_0000_max_476x317.jpeg";
const alt = "Chart Road, Ashford - the old Ashford hospital.";
const title = "Chart Road, Ashford, TN23";
const details =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam explicabo fugit quisquam, eum dolorem, excepturi, quasi iusto neque modi exercitationem harum culpa dolore est hic amet minima voluptates sunt voluptas.";
const handleLike = () => {
  //TODO
  console.log("I was liked.");
};
const listingStyles = "listing";
export default function Listing() {
  return (
    <>
      {/* <h2>Listing</h2> */}
      {/* <div>
        <p>a conventional element child</p>
      </div>
      <Card>
        <p>wrapped by a custom parent</p>
      </Card> */}
      <article className={listingStyles}>
        <PropertyPrice price={price} />
        <PropertyPic url={url} alt={alt} />
        <PropertyDetails title={title} details={details} />
        {/* Propertylike passes down a function */}
        <PropertyLike onlike={handleLike} />
      </article>
    </>
  );
}
