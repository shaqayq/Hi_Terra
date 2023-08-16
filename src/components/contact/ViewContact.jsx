import React, { useEffect } from 'react'
import '../../style/contact/viewContact.css'
import { useGetContactDetailMutation } from '../../features/apiSlice'
import { useParams } from 'react-router-dom';
export default function ViewContact() {

    const [getContactDetail , {data , isSuccess}]= useGetContactDetailMutation();
    const {contact_id} = useParams
    
    useEffect(()=>{
        getContactDetail(contact_id)
    }, [contact_id, getContactDetail])

    if(isSuccess) {
        console.log(data);
    }

    // const contact = data ;

    
  return (
    <>
    {/* {isSuccess ? (
        <div class="card">
        <h2>Contact Details</h2>
        <div class="contact-info">
        <p><strong>Name:</strong> {contact.contactName}</p>
        <p><strong>Email:</strong> john@example.com</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Address:</strong> 123 Main St, City, Country</p>
    </div>
  </div>
  ): <></>} */}
    </>
  )
}
