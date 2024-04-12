import PropertyPic from "./PropertyPic";
import PropertyDetails from "./PropertyDetails";
import { v4 as uuidv4 } from "uuid";
import "./like.css";

const likeStyles = "text-center bg-indigo-200";
const parentGridStyles = "like";
export default function Likes(props) {
  return (
    <>
      <aside className={parentGridStyles}>
        {props.likes.map((like) => (
          <article className={likeStyles} key={uuidv4()}>
            <PropertyPic url={like.picUrl} alt={like.picAlt} />
            <PropertyDetails title={like.picAlt} />
          </article>
        ))}
      </aside>
    </>
  );
}
