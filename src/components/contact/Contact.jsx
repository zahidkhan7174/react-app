import React, { useState } from "react";
import './contact.css'

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form className="form"
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="SHOW"
      target="contact"
    >
      <div >
        <input
          type="text"
          placeholder="Your name"
          className="name"
          name="name"
          required
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="email"
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Your message"
          name="message"
          className="mess"
          required
        />
      </div>
      <div>
        <button className="btnn" type="submit">Send Message</button>
      </div>
    </form>
  );
};

export default Contact;