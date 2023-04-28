import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContacts}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [nameDuplicate, setNameDuplicate] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (nameDuplicate) {
      alert('Person is already in the contactlist.')
      return
    }

    const new_contact = {

      name: name,
      phone: phone,
      email: email

    };

    addContacts(new_contact);
    setName('');
    setPhone('');
    setEmail('');

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    if (contacts.every((person) => person.name !== name)) {
      setNameDuplicate(false)

    } else {
      setNameDuplicate(true)
    }
  }, [name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <p></p>
        <ContactForm name={name} phone={phone} email={email} setName={setName} setPhone={setPhone} setEmail={setEmail} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts}/>
      </section>
    </div>
  );
};
