import React, { useEffect } from 'react'
import '../../style/contact/viewContact.css'
import { useGetContactDetailQuery } from '../../features/apiSlice';
import { useParams } from 'react-router-dom';
export default function ViewContact() {

    const {contact_id} = useParams();

    const  {data: contact , isLoading, isError }= useGetContactDetailQuery(contact_id);
    
    
  
    if (isLoading) {
        return <p>Loading...</p>;
      }
    
      if (isError) {
        return <p>Error loading contact details.</p>;
      }

      const detail = contact.contacts;
    
  return (
    <>
   
        <div className="card">
        <h2>Contact Details</h2>
        <div className="contact-info">
        <p><strong>Name:</strong> {detail.contactName}</p>
        <p><strong>Email:</strong> {detail.email}</p>
        <p><strong>Phone:</strong> {detail.mobileNo}</p>
        <p><strong>Address:</strong> {detail.address}</p>
    </div>
  </div>

    </>
  )
}
