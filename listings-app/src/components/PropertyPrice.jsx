export default function PropertyPrice(props) {
  const priceStyles = "text-3xl";
  return (
    <>
      <h2 className={priceStyles}>£{props.price.toLocaleString()}</h2>
    </>
  );
}
