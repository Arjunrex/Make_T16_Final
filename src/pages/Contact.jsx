import { useRef, useState } from "react";

function Contact() {
  const nameRef = useRef();

  const [name, setName] =
    useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      nameRef.current.focus();
      return;
    }

    alert("Form Submitted");
  };

  return (
    <div className="page">
      <h1>Contact Us</h1>

      <form onSubmit={submitHandler}>
        <input
          ref={nameRef}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;