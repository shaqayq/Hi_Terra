import React, { useEffect, useState } from "react";
import "../../style/contact/contact.css";
import {
  useContactListQuery,
  useDeleteContactMutation,
} from "../../features/apiSlice";
import { BsEyeFill, BsPencilSquare, BsFillTrashFill } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";


export default function Contacts() {
  const navigate = useNavigate();

  const { data, isLoading: contactLoading } = useContactListQuery();
  
  const [
    deleteContact,
    { isLoading: isDeleting },
  ] = useDeleteContactMutation();


  
  const handleDelete = async (id) => {
    try {
      await deleteContact(id).then(()=>navigate('/contact-list'));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {contactLoading ? (
        <p id="loading">Loading...</p>
      ) : (
        <div className="table-container">
          <div className="table-content">
            <div className="table-title">
              <h2>Contact List</h2>
            </div>
            {isDeleting ? <p id='delete-msg'>Contact Delete Successfully!</p> : null}
            <div className="add-button">
              <NavLink to="/add-contact">
                <button>Add</button>
              </NavLink>
            </div>
          </div>
          <table>
          <thead>
              <tr>
                <th>user ID</th>
                <th>Customer</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.contacts.map((contact) => (
                <tr key={contact.id}>
                
                  <td>{contact.id}</td>
                  <td>{contact.contactName}</td>
                  <td>{contact.email}</td>
                  <td>{contact.mobileNo}</td>
                  <td>{contact.address}</td>
                  <td>
                    <div className="table-actions">
                     <NavLink to={`/edit-contact/${contact.id}`}> 
                        <i id="edit">
                          <BsPencilSquare />
                        </i>{" "}
                        </NavLink>
                      <button >
                       <NavLink to={`/contact-detail/${contact.id}`}> 
                        <i id="view">
                          <BsEyeFill />
                        </i>{" "}</NavLink>
                      </button>
                      <button onClick={() => handleDelete(contact.id)}>
                        <i id="delete">
                          <BsFillTrashFill />
                        </i>{" "}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

