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
export default function ContactForm({ title }) {
  var [username, setUsername] = useState("");
  var [email, setEmail] = useState("");
  var [formSubmitted, setFormSubmitted] = useState(false);

  const btnStyles = "bg-indigo-700 w-28 h-8 text-white leading-8 mt-2.5";

  const handleSubmit = (e) => {
    // e.preventDefault(); // WAY 1
    // button type="button"   WAY 2
    console.log({ username, email });
    setFormSubmitted(true);
    setUsername("");
    setEmail("");
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
        <label id="formLabel" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="border-2 border-gray-700 m-4"
        />
        <label id="formLabel" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="border-2 border-gray-700 m-4"
        />
        <button
          id="formBtn"
          type="button"
          onClick={handleSubmit}
          className={btnStyles}
        >
          Submit
        </button>
        {formSubmitted && username === "" && <p>username must not be empty</p>}
        {/* TODO make feedback disappear after a few seconds in a useEffect */}
      </form>
    </>
  );
}
