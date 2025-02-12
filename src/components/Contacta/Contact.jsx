import React, { useState } from "react";
import "./Contact.css";
import Footer from "../Footer/Footer";

const Contact = () => {
  const tasks = ["Branding", "Photography", "Social Media", "Videography", "UI/UX"];
  const fields = ["Name", "Email", "Company name", "Your Designation", "Phone Number"];
  const budget = ["$2000-$5000", "$5000-$10000", "more than $10000"];

  const [activeTasks, setActiveTasks] = useState([]);
  const [activeBudget, setActiveBudget] = useState(null);

  const toggleTask = (task) => {
    setActiveTasks((prevTasks) =>
      prevTasks.includes(task)
        ? prevTasks.filter((t) => t !== task)
        : [...prevTasks, task]
    );
  };

  return (
    <div className="container">
      <br /><br /><br />
      <h2 className="title">You need to do</h2>
      <div className="button-group">
        {tasks.map((task, index) => (
          <button 
            key={index} 
            className={`task-button ${activeTasks.includes(task) ? "active" : ""}`}
            onClick={() => toggleTask(task)}
          >
            {task}
          </button>
        ))}
      </div>
      
      <form className="form-container">
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
            className={`budget-button ${activeBudget === amount ? "active" : ""}`}
            onClick={() => setActiveBudget(amount)}
          >
            {amount}
          </button>
        ))}
      </div>

      <div className="project-details">
        <h3 className="project-text">Share details about your project</h3>
        <br />
        <textarea name="" id="" rows={10} cols={150}></textarea>
      </div>
      
    </div>
  );
};

export default Contact;
