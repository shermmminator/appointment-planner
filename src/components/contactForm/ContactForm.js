import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label >Name:</label>
          <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          <label >Phone:</label>
          <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}/>
          <label >Email:</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <br />
          <input type="submit" value="Add Contact" />
        </form>
      </div>
    </>
  );
};

