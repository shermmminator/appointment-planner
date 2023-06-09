import React, {useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  
  const [contacts, setContacts] = useState([{name: "Ziggy Stardust", email: "kukcac@kukac.com", phone: 123455677655}, 
  {name: "Slim Shady", email: "kaki@kaki.com", phone: 12345423445}]);
  const [appointments, setAppointments] = useState([]);

  
  const addContacts = (new_contact) => {
    setContacts((prev) => [...prev, new_contact])
  };

 const addAppointments = (new_appointment) => {
  setAppointments((prev) => [...prev, new_appointment])
 }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage addContacts={addContacts} contacts={contacts}/>  }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage addAppointments={addAppointments} appointments={appointments} contacts={contacts}/>  }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
