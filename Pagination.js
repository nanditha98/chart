// 


import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    keyword: 'defaultKeyword',
    userid: 'defaultUserId',
    startdate: new Date().toISOString(),
    enddate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // Default end date is 7 days from now
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // You can submit the form data to a backend API or perform any other necessary action here
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="keyword">Keyword:</label>
        <input
          type="text"
          id="keyword"
          name="keyword"
          value={formData.keyword}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="userid">User ID:</label>
        <input
          type="text"
          id="userid"
          name="userid"
          value={formData.userid}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="startdate">Start Date:</label>
        <input
          type="datetime-local"
          id="startdate"
          name="startdate"
          value={formData.startdate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="enddate">End Date:</label>
        <input
          type="datetime-local"
          id="enddate"
          name="enddate"
          value={formData.enddate}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm