import React from 'react'
import '../../style/contact/contact.css'
import { useContactListQuery , useDeleteContactMutation} from '../../features/apiSlice'
import {BsEyeFill , BsPencilSquare , BsFillTrashFill} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

export default function Contacts() {

  const {data, isLoading: getContacts , isSuccess} = useContactListQuery();
  const { mutate: deleteContactMutation } = useDeleteContactMutation();

  const handleDelete = async (id) => {
    console.log(id);
    // try {
    //   const response = await deleteContactMutation({ id });
    //   console.log(Response);
    // } catch (error) {
    //     console.log(error);
    // }
  }

 
  
  return (
    <>
    {getContacts ? <p id='loading'>Loading...</p> : (
        <div className='table-container'>
          <div className="table-content">
            <div className="table-title">
              <h2>Contact List</h2>
            </div>
  
            <div className="add-button">
              <NavLink to='/add-contact'><button>Add</button></NavLink>
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
            {data.contacts.map((contact, index) => (
                <tr key={index}>
                  <td>{contact.userID}</td>
                  <td>{contact.fullname}</td>
                  <td>{contact.email}</td>
                  <td>{contact.mobileNo}</td>
                  <td>{contact.address}</td>
                  <td>
                    <div className='table-actions'>
                    <NavLink to='/show/${contact.id}'> <i id='view'><BsEyeFill/></i></NavLink> 
                    <NavLink to='/edit'><i id='edit'><BsPencilSquare/></i></NavLink> 
                    <button onClick={()=>{handleDelete(contact.id)}}><i id='delete' ><BsFillTrashFill/></i> </button>
                    </div>
                  </td>
                </tr>)
                
              )}
            </tbody>
          </table>
        </div>
      ) }
    </>
  );
  

}