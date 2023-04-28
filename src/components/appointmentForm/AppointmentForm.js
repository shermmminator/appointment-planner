import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};


export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

   

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Title: </label>
          <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <label>Contact: </label>
          <ContactPicker contacts={contacts} value={contact} onChange={(e) => setContact(e.target.value)}/>
          <label>Date: </label>
          <input name="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <label>Time:</label>
          <input name="time" type="time" value={time} onChange={(e) => setTime(e.target.value)}></input>
          <br />
          <input type="submit" value="Submit Appointment" />
        </form>
      </div>
    </>
  );
};
