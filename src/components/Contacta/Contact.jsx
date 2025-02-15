import React, { useState } from "react";
import "./Contact.css";
import Footer from "../Footer/Footer";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const tasks = ["Branding", "Photography", "Social Media", "Videography", "UI/UX"];
  const fields = ["Name", "Email", "Company name", "Your Designation", "Phone Number"];
  const budget = ["$2000-$5000", "$5000-$10000", "more than $10000"];

  const [activeTasks, setActiveTasks] = useState([]);
  const [activeBudget, setActiveBudget] = useState(null);
  const [captchaValue, setCaptchaValue] = useState(null);

  const toggleTask = (task) => {
    setActiveTasks((prevTasks) =>
      prevTasks.includes(task)
        ? prevTasks.filter((t) => t !== task)
        : [...prevTasks, task]
    );
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify reCAPTCHA");
      return;
    }

    alert("Form submitted successfully!");
    // Backend API ko yahan call karein agar required ho
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
      
      <form className="form-container" onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} className="input-group">
            <input type="text" placeholder={field} className="input-field" />
          </div>
        ))}

        <h2 className="title budget-title">Select Your Budget</h2>
        <div className="button-group budget-group">
          {budget.map((amount, index) => (
            <button 
              key={index} 
              type="button"
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
          <textarea rows={10} cols={150}></textarea>
        </div>

        <div className="captcha-button-container">
          <ReCAPTCHA 
            className="recaptcha" 
            sitekey="6Le4NNgqAAAAAJWrZfXU3m8ssIPhx_nRH4fgxlqq"  // 🔹 Yahan apni Google reCAPTCHA Site Key paste karein
            onChange={handleCaptchaChange} 
          />
          <button type="submit" className="submit-buttons">Submit Form</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
