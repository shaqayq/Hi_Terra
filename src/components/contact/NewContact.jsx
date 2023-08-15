import React from 'react'
import '../../style/contact/newContact.css'
export default function NewContact() {
    const users = [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
        { id: 3, name: 'User 3' },
      ];
    
      const statuses = ['Active', 'Inactive', 'Pending', 'Blocked'];

  return (
    <>
    <div className='newContact'>
    <div className="form-container">
      <h2 className='form-title'>Add New Contact </h2>
      <form className="contact-form">
        <div className="form-group">
          
          <select id="userId" name="userId" >
            <option>--select userID--</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
         
          <input type="text" id="contactNo" name="contactNo" placeholder='Contact Number'/>
        </div>

        <div className="form-group">

          <input type="text" id="contactName" name="contactName" placeholder='Contact Name'/>
        </div>

        <div className="form-group">
         
          <select id="status" name="status">
            <option>--select contact status--</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className='contact-btn'>Save</button>
      </form>
    </div>
    </div>

    </>
  )
}
