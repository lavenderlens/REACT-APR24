export default function PropertyDetails(props) {
  const detailsStyles = "description text-gray-800 text-1xl ";
  const h3Styles = "text-2xl";
  return (
    <>
      <h3 className={h3Styles}>{props.title}</h3>
      <p className={detailsStyles}>{props.details}</p>
    </>
  );
}
