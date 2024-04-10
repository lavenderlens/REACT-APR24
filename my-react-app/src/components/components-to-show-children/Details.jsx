export default function Details({ type, description }) {
  return (
    <>
      <div className="description">
        <h3>{type}</h3>
        <p>{description}</p>
      </div>
    </>
  );
}
