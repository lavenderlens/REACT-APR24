export default function PropertyPrice(props) {
  return (
    <>
      <h2>£{props.price.toLocaleString()}</h2>
    </>
  );
}
