import React,{useState, useEffect} from 'react'
import "../../style/contact/newContact.css";
import { useGetContactDetailQuery ,  useGetUsersQuery, useEditContactMutation} from '../../features/apiSlice';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function EditContact() {
    const userDetail = JSON.parse(localStorage.getItem('user'));
    const { contact_id } = useParams();
    const navigate = useNavigate();
  
    const [formData, setFormData] = useState({
      userId: '',
      contactNo: '',
      contactName: '',
      status: '',
      createdBy: userDetail.id,
      updatedBy: userDetail.id,
    });
  
    const { data: contactData, isLoading, isError } = useGetContactDetailQuery(contact_id);
  
    const [
      editContact,
      { isLoading: isEditing, isError: editError, isSuccess: editSuccess },
    ] = useEditContactMutation();
  
    const { data: userData, isLoading: userLoading } = useGetUsersQuery();
  
    const statuses = {
      Active: 1,
      Inactive: 2,
      Deleted: 3,
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await editContact({ id: contact_id, ...formData });
        console.log(response);
        if (response) {
          navigate('/contact-list');
        }
      } catch (error) {
        console.error('Edit contact error:', error);
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    if (isLoading || userLoading) {
      return <p>Loading...</p>;
    }
  
    if (isError) {
      return <p>Error loading contact details.</p>;
    }
  
    const detail = contactData.contacts;
    const user = userData.users;
  
    return (
      <div className="newContact">
        {editError ? <p>Error</p> : null}
        <div className="form-container">
          <h2 className="form-title">Edit Contact</h2>
          <form className="contact-form" method="POST" onSubmit={handleSubmit}>
            <div className="form-group">
              <select
                id="userId"
                name="userId"
                onChange={handleChange}
                value={formData.userId || detail.userId}
              >
                <option>--select userID--</option>
                {user.map((user) => (
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
                value={formData.contactNo || detail.contactNo}
                onChange={handleChange}
              />
            </div>
  
            <div className="form-group">
              <input
                type="text"
                id="contactName"
                name="contactName"
                placeholder="Contact Name"
                value={formData.contactName || detail.contactName}
                onChange={handleChange}
              />
            </div>
  
            <div className="form-group">
              <select
                id="status"
                name="status"
                value={formData.status || detail.status}
                onChange={handleChange}
              >
                <option>--select contact status--</option>
                {Object.entries(statuses).map(([status, value]) => (
                  <option key={status} value={formData.status || detail.status}>
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
    );
  }
