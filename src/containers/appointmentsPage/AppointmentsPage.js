import React, { useState, useEffect } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({addAppointments, appointments, contacts}) => {
  

  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isAvailable, setIsAvailable] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const new_appointment = {

      title: title,
      contact: contact,
      date: date,
      time: time

    };

    

    if(isAvailable) {
      addAppointments(new_appointment);
      setTitle('');
      setContact('');
      setDate('');
      setTime('');

    } else {
      alert('Time not available.')
    }

    
   
  };

  useEffect(() => {
    if (appointments.every((appointment) => appointment.time !== time || appointment.date !== date)) {
      setIsAvailable(true)
    } else {
      setIsAvailable(false)
    }
  }, [time], [date])

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          title={title} 
          setTitle={setTitle} 
          contact={contact} 
          setContact={setContact} 
          date={date} 
          setDate={setDate} 
          time={time} 
          setTime={setTime} 
          contacts={contacts}
          handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointments={appointments}/>
      </section>
    </div>
  );
};