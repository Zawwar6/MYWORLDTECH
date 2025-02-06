import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const tasks = ["Branding", "Photography", "Social Media", "Videography", "UI/UX"];
  const fields = ["Name", "Email", "Company name", "Your Designation", "Phone Number"];
  const budget = ["$2000-$5000", "$5000-$10000", "more than $10000"];

  const [activeTask, setActiveTask] = useState(null);
  const [activeBudget, setActiveBudget] = useState(null);

  return (
    <div className="container">
      <br /><br /><br />
      <h2 className="title">You need to do</h2>
      <div className="button-group">
        {tasks.map((task, index) => (
          <button 
            key={index} 
            className={`task-button ${activeTask === task ? "active" : ""}`}
            onClick={() => setActiveTask(task)}
          >
            {task}
          </button>
        ))}
      </div>
      
      <form className="form-container active">
        {fields.map((field, index) => (
          <div key={index} className="input-group">
            
            <input type="text" placeholder={field} className="input-field" />
          </div>
        ))}
      </form>

      <h2 className="title budget-title">Select Your Budget</h2>
      <div className="button-group budget-group">
        {budget.map((amount, index) => (
          <button 
            key={index} 
            className={`task-button budget-button ${activeBudget === amount ? "active" : ""}`}
            onClick={() => setActiveBudget(amount)}
          >
            {amount}
          </button>
        ))}
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </div>
  );
};

export default Contact;
