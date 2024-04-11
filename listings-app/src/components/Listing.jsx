// import Card from "./Card";
import PropertyPrice from "./PropertyPrice";
import PropertyPic from "./PropertyPic";
import PropertyDetails from "./PropertyDetails";
import PropertyLike from "./PropertyLike";
import "./listing.css";

const listingStyles = " m-4 listing ";
export default function Listing(props) {
  return (
    <>
      <main>
        {props.listings.map((listing) => (
          <article className={listingStyles}>
            <PropertyPrice price={listing.price} />
            <PropertyPic url={listing.picUrl} alt={listing.picAlt} />
            <PropertyDetails
              title={listing.picAlt}
              details={listing.details.substr(0, 80).concat("...")}
            />
            {/* Propertylike passes down a function */}
            <PropertyLike onlike={props.onlike} />
          </article>
        ))}
      </main>
    </>
  );
}
