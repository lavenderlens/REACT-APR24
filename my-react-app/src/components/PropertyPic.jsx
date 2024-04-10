export default function PropertyPic(props) {
  const propertyPicStyles = "image";
  return (
    <>
      <img src={props.url} alt={props.alt} className={propertyPicStyles} />
    </>
  );
}
