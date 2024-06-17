import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name :
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </label>
        <label htmlFor="phone">
          Phone :
          <input
            type="tel"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
            title="Contact Phone (###-###-####)"
            placeholder="Contact Phone (###-###-####)"
            required
          />
        </label>
        <label htmlFor="email">
          Email :
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
