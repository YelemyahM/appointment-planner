import React, { useState, useEffect, useMemo } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  const nameIsDuplicate = useMemo(() => {
    const nameFound = contacts.find(
      (contact) => contact.name.toLowerCase === name.toLowerCase
    );
    return nameFound !== undefined;
  }, [name, contacts]);

  useEffect(() => {
    setDuplicate(nameIsDuplicate);
  }, [nameIsDuplicate]);

  return (
    <div>
      <section>
        <h2>Add Contact {duplicate ? " - This name already exists" : ""}</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
