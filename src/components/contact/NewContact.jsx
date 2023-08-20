import React, { useState } from "react";
import "../../style/contact/newContact.css";
import {
  useGetUsersQuery,
  useCreateContactMutation,
} from "../../features/apiSlice";
import { useNavigate } from "react-router-dom";

export default function NewContact() {
  const userDetail = JSON.parse(localStorage.getItem("user"));

  const navigat = useNavigate();
  const [formData, setFormData] = useState({
    userId: "",
    contactNo: "",
    contactName: "",
    status: null,
    createBy: userDetail.id,
    updateBy: userDetail.id,
  });
  const statuses = {
    Active: 1,
    Inactive: 2,
    Deleted: 3,
  };

  const { data, isLoading } = useGetUsersQuery();
  const [
    createContact,
    { isLoading: createLoading, isError: userCreateField , isSuccess},
  ] = useCreateContactMutation();

  if (isLoading) {
    return <p id="loading">Loading...</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await createContact(formData);
  
      if(response){
        setTimeout(() => {
          navigat('/contact-list');
        
        }, 1000); 
     
      }
   
    } catch (error) {
      console.error("Add contact error:", error);
    }
  };

  return (
    <>
      <div className="newContact">
        {userCreateField ? <>Error</> : <></>}
        
        <div className="form-container">
          {isSuccess ? <p id="success-msg">Contact Create Successfully!</p> : <></>}
          <h2 className="form-title">Add New Contact </h2>
          <form className="contact-form" onSubmit={handleSubmit} method="PUT">
            <div className="form-group">
              <select
                id="userId"
                name="userId"
                onChange={handleChange}
                value={formData.userId}
              >
                <option>--select userID--</option>
                {data.users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.fullname}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <input
                type="number"
                id="contactNo"
                name="contactNo"
                placeholder="Contact Number"
                value={formData.contactNo}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                id="contactName"
                name="contactName"
                placeholder="Contact Name"
                value={formData.contactName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option>--select contact status--</option>
                {Object.entries(statuses).map(([status, value]) => (
                  <option key={status} value={value}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="contact-btn">
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
