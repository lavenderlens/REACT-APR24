// import Card from "./Card";
import PropertyPrice from "./PropertyPrice";
import PropertyPic from "./PropertyPic";
import PropertyDetails from "./PropertyDetails";
import PropertyLike from "./PropertyLike";
import { v4 as uuidv4 } from "uuid";
import "./listing.css";

const listingStyles = " m-4 listing ";
export default function Listing(props) {
  // props NOT destructured at this stage as App> Listing> PropertyLike etc
  // are parent to GRANDCHILD relationships
  // this is known as PROP DRILLING in React
  // and was the main inspiration behind Redux and other state management tools such as MobX
  // many devs reach for a state management tool straight out the box
  // they think:
  // prop drilling is complicated
  // how does a child component commuicate back up the component tree to a parent
  // OR a grandparent?
  // they do not know how to implement lfting state up
  // (ie passing a function down)
  // the show listings button accepts a function from its immediate parent
  // the like button from its grandparent
  // state management solutions offer a store which wraps the whole app
  // in a decorator pattern
  // like BrowserRouter or React.StrictMode
  // every component has access to the same store
  // actions are dispatched by reducers (a lot of jargon)
  // the intention is that store state is always immutable
  // a reducer returns a modified copy of store state
  // with actions performed.
  // React also has its own baked-in Context API which works in a very similar way
  // the question of which to use hinges on the scale of the app
  // devs get fed up quickly with prop drilling and lifting state up
  // the real problems occur when a child or grandchild or even great grandchild
  // of ONE component tree
  // wishes to communicate with a similar component in another tree
  // if you have or think you will have a LOT of this going on
  // your app becomes a condidate for more advanced state management
  // the recommended way to use Redux these days is with the RTK
  // Redux ToolKit
  // it is a scaffolding app similar to Vite or CRA
  // RTK was meant to cut down on complexity of Redux apps
  // in our opinion it has not

  return (
    <>
      <main>
        {props.listings.map((listing) => (
          <article className={listingStyles} key={uuidv4()}>
            <PropertyPrice price={listing.price} />
            <PropertyPic url={listing.picUrl} alt={listing.picAlt} />
            <PropertyDetails
              title={listing.picAlt}
              details={listing.details.substr(0, 80).concat("...")}
            />
            {/* Propertylike passes down a function */}
            {/* we must pass UP a payload - a Listing object */}
            {/* <PropertyLike onLike={props.onLike} /> */}
            {/* if we now pass an arg to the onLike function
            we must wrap that function in another functio.
            This is so that the behaviour remains async. */}
            {/* the code below will create an infinite render loop!! */}
            {/* <PropertyLike onLike={props.onLike(listing)} /> */}
            <PropertyLike onLike={() => props.onLike(listing)} />
          </article>
        ))}
      </main>
    </>
  );
}
