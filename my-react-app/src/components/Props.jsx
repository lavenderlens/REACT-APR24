/**
 *
 * a prop: some data passed from parent to child component
 * prop is like a custom HTML attribute name={value}
 * react will WRAP ALL PROPS in a n object and pass that object to the child function
 * typically, the props parameter is named props - arbitatrary name, doesn't have to be
 * react calls the component function for me - I never call it directly
 * props MUST NOT BE MODIFIED by the child component receiving them
 * props may be DESTRUCTURED when passed to the component
 * this should not be done when other components (grandchild) depend on props as well
 */
import Paragraph from "./Paragraph";
// passing whole props object
export default function Props(props) {
  //passing individual props, destructured
  // export default function Props({ greeting, farewell, message }) {
  return (
    <>
      <h2>Props</h2>
      <Paragraph message={props.message} />
      {/* {console.log(props.greeting, props.farewell)} */}
      {/* {console.log(greeting)} */}
      {/* {console.log(farewell)} */}
    </>
  );
}
