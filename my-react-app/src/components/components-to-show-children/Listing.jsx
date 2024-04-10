import Card from "./Card";
import Image from "./Image";
import Details from "./Details";
import "./listing.css";

export default function Listing() {
  return (
    <>
      {/* <Card>
        <Image
          url={
            "https://media.rightmove.co.uk/dir/crop/10:9-16:9/48k/47904/144091031/47904_a34a8a3e-5ee8-4a81-b806-ec9213e858e6_IMG_00_0000_max_476x317.jpeg"
          }
          title={"Chart Road, Ashford, Kent"}
        />
        <Details
          type={"Apartments"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsa? Architecto quasi rem deserunt enim non optio perferendis adipisci et dolores voluptatem. Iusto quos harum, ipsum excepturi impedit aspernatur ducimus."
          }
        />
      </Card> */}

      <div>
        <p>a conventional element child</p>
      </div>
      <Card>
        <p>wrapped by a custom parent</p>
      </Card>
    </>
  );
}
