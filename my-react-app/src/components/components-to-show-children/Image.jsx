export default function Image({ url, title }) {
  return (
    <>
      <h2>{title}</h2>
      <img className="image" src={url} alt={title} />
    </>
  );
}
