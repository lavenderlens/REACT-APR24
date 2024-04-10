export default function Card({ children }) {
  return (
    <>
      <section>
        <p>without the children prop</p>
      </section>
      <section>{children}</section>
    </>
  );
}
