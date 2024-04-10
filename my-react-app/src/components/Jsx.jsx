export const Jsx = () => {
  var names = ["Dan", "Alan"];
  var isEmployed = false;

  return (
    <>
      <h2>Jsx</h2>
      <p>children</p>
      {/* JSX Expression syntax is curly braces */}
      {/* {console.log(names)} */}
      <ul>
        {/* curly braces are Jsx expressions
              therefore we group returns from arrow functions 
              with round brackets instead
              otherwise Jsx thinks it is another Jsx expression */}
        {/* NOTE Warning: Each child in a list should have a unique "key" prop. */}
        {/* Warning: Encountered two children with the same key, `Dan`. Keys should be unique so that components maintain their identity across updates.  */}
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
        {/* conditional rendering:
              Jsx should NOT have loops or if else statements */}
        if(false){<p>I am true</p>}
        {/* renders anyway */}
      </ul>
      <p>My name is {names[0]}</p>
      {/* conditional rendering */}
      {isEmployed && <p>I am employed</p>}
      {isEmployed ? <p>I am employed</p> : <p>I am unemployed</p>}
      {/* boolean, undefined, or null values are NOT RENDERED */}
      <p>{true}</p>
      <p>{undefined}</p>
      <p>{null}</p>
      {/* BUT ES11 nullish coalescing operator does work in JSX */}
      <p>{null ?? "a null value"}</p>
    </>
  );
};
