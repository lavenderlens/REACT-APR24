/**
 *
 * @returns forms have to have react state for each and every form filed
 * This may look repetitive at first but soon become second nature
 * Forms must be two-way bound:
 * when yout type of modify an input
 * that has to change the state
 * and the changed state has to be rendered in the form field to see as you type
 * so info going IN to React state needs to be passed
 * AND info coming OUT of react state needs to be updated in the form fields
 * Also, the default behaviour of a coventional web form is to reload on submit!
 * we dont want our react app to reload!
 * So we fix this in one of two ways below:
 */
import { useState, useEffect } from "react";
export default function Form({ title }) {
  var [username, setUsername] = useState("");
  var [password, setPassword] = useState("");
  var [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    // e.preventDefault(); // WAY 1
    // button type="button"   WAY 2
    console.log({ username, password });
    setFormSubmitted(true);
    setUsername("");
    setPassword("");
  };

  useEffect(() => {
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  }, [formSubmitted]);
  return (
    <>
      <h2>{title}</h2>
      <form>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        {formSubmitted && username === "" && <p>username must not be empty</p>}
        {formSubmitted && password === "" && <p>password must not be empty</p>}
        {/* TODO make feedback disappear after a few seconds in a useEffect */}
      </form>
    </>
  );
}
