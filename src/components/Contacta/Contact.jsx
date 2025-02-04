import React from "react";
import "./Contact.css";

const Contact = () => {
  const tasks = ['Branding', 'Photography', 'Social Media', 'Videography', 'UI/UX'];
  const fields = ['Name', 'Email', 'Company name', 'Your Designation', 'Phone Number'];
  const budget = ['$2000-$5000', '$5000-$10000', 'more than $10000'];

  return (
    <div className="container"><br /><br /><br />
      <h2 className="title">You need to do</h2>
      <div className="button-group">
        {tasks.map((task, index) => (
          <button key={index} className="task-button">{task}</button>
        ))}
      </div>
      
      <form className="form-container">
        {fields.map((field, index) => (
          <div key={index} className="input-group">
            <label className="label">{field}</label>
            <input type="text" placeholder={field} className="input-field" />
          </div>
        ))}
      </form>

      <h2 className="title budget-title">Select Your Budget</h2>
      <div className="button-group budget-group">
        {budget.map((amount, index) => (
          <button key={index} className="task-button budget-button">{amount}</button>
        ))}
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </div>
  );
};

export default Contact;
