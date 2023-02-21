import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Addcontact from './Components/Contacts/AddContact/Addcontact'
import ContactList from './Components/Contacts/ContactList/ContactList'
import EdithContact from './Components/Contacts/EdithContact/EdithContact'
import ViewContact from './Components/Contacts/ViewContact/ViewContact'
import Navbar from './Components/Navbar/Navbar'


function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'}/>} />
        <Route path={'/contacts/list'} element={<ContactList />} />
        <Route path={'/contacts/add'} element={ <Addcontact />} />
        <Route path={'/contacts/view/:contactId'} element={ <ViewContact />} />
        <Route path={'/contacts/edit/:contactId'} element={ <EdithContact />} />
      </Routes>
    </React.Fragment>
  )
}

export default App