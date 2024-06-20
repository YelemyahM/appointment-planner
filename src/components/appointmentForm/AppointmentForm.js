import React, { useMemo } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            value={name}
            name="title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Appointment Name"
          />
        </label>
        <label>
          <ContactPicker
            name={contact}
            value={contact}
            contacts={contactNames}
            onChange={(e) => setContact(e.target.value)}
          />
        </label>
        <label>
          <input
            value={date}
            name="date"
            type="date"
            min={getTodayString()}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            value={time}
            name="time"
            type="time"
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
