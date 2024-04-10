export default function PropertyDetails(props) {
  const detailsStyles = "description";
  return (
    <>
      <h3>{props.title}</h3>
      <p className={detailsStyles}>{props.details}</p>
    </>
  );
}
