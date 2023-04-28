import React from "react";

export const ContactPicker = ({contacts}) => {
  return (
    <>
      <div>
          <select>
        {contacts.map((contact, index) => {
          
          return <option 
                  value={contact.name}
                  key={contact.name}>
                  {contact.name}
                  </option>
        })}
          </select>
      </div>
    </>
  );
};
