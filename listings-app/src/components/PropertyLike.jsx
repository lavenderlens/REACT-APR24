export default function PropertyLike(props) {
  const likeStyles = "bg-indigo-700 w-16 h-8 text-white leading-8 mt-2.5";
  return (
    <>
      <button onClick={props.onlike} className={likeStyles}>
        Like
      </button>
    </>
  );
}
