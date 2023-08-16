import Navbar from "./layouts/Navbar";
import Sidebar from "./layouts/Sidebar";
import Index from "./components/dashboard/Index";
import Contacts from "./components/contact/Contacts";
import NewContact from "./components/contact/NewContact";
import ViewContact from "./components/contact/ViewContact";
import FooterSection from './layouts/FooterSection'
import './style/app.css'
import Login from "./components/auth/Login";
import React from 'react';
import { BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { terraApi } from "./features/apiSlice";

function App() {
  return (
    <ApiProvider api={terraApi}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ApiProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login' || location.pathname === '/' ;
  
  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        {isLoginPage ? <></> :  <Sidebar />} 
        <div className="h-full w-4/5">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Index />} />
            <Route path="/contact-list" element={<Contacts/>} />
            <Route path="/add-contact" element={<NewContact/>} />/contact-detail
            <Route path="/contact-detail/:contact_id" element={<ViewContact/>} />
            <Route path="/login" element={<Login />} />
           
          </Routes>
          <FooterSection />
        </div>
      </div>
    </>
  );
}

export default App;
