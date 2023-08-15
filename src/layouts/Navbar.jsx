import React from "react";
import "../style/layout/navbar.css";
import logo from "../images/logo.jpeg";
import {BsSearch ,BsBell} from 'react-icons/bs'
import {TfiEmail} from 'react-icons/tfi'
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow">
        <div className="mx-auto border-b-2 px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <a href="#/">
                <img className="w-24 mr-6" src={logo} alt="logo" />
              </a>
              <div className="navbar-item">
              <a className=" font-bold text-gray-900" href="#/">
               Home
              </a>
              <a
                className="text-sm ml-4 text-gray-500 hover:text-gray-900"
                href="#/about"
              >
                About Us
              </a>
            
                   <NavLink to='/home' className="text-sm ml-4 text-gray-500 hover:text-gray-900">Dashboard</NavLink>
         
              </div>
            </div>
            <div className="ml-4 flex items-center">
             
              <a
                className="mr-4 text-sm text-gray-500 hover:text-gray-900"
                href="#/contact"
              >
                <BsSearch/>
              </a>
              <a
                className="mr-4 text-sm text-gray-500 hover:text-gray-900"
                href="#/contact"
              >
                <TfiEmail/>
              </a>
              <a
                className="mr-4 text-sm text-gray-500 hover:text-gray-900"
                href="#/contact"
              >
                <BsBell/>
              </a>
              {/* <div className="flex items-center">
                <div className="">
                  <span className=""> 
                  S  
                  </span>
                </div>
             
                <button className="ml-4 rounded bg-gray-600 px-4 py-2 font-bold text-white hover:bg-gray-700">
                  Sign Out 
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
