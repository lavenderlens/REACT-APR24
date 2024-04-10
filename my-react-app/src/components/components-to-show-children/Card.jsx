// export default function Card({ children }) {
//works
export default function Card() {
  //error
  return (
    <>
      {/* <section className="card">{children}</section> */}
      <section className="card">
        <p>without the children prop</p>
      </section>
    </>
  );
}
