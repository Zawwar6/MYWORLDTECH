import React, { useState } from "react";
import "./Contact.css";
import Footer from "../Footer/Footer";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const tasks = ["Branding", "Photography", "Social Media", "Videography", "UI/UX"];
  const fields = ["Name", "Email", "Company name", "Your Designation", "Phone Number"];
  const budget = ["$2000-$5000", "$5000-$10000", "more than $10000"];

  const [activeTasks, setActiveTasks] = useState([]);
  const [activeBudget, setActiveBudget] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company_name: "",
    your_designation: "",
    phone_number: "",
    project_details: "",
  });

  const toggleTask = (task) => {
    setActiveTasks((prevTasks) =>
      prevTasks.includes(task) ? prevTasks.filter((t) => t !== task) : [...prevTasks, task]
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      toast.error("⚠️ Please verify reCAPTCHA!");
      return;
    }

    const serviceID = "service_s41r3tv"; // EmailJS Service ID
    const templateID = "template_xvlq6ko"; // EmailJS Template ID
    const userID = "GTHNOTO5SK2C9bK4b"; // EmailJS Public Key

    const formDataWithExtras = {
      ...formData,
      tasks: activeTasks.join(", "), // Convert tasks array to comma-separated string
      budget: activeBudget,
    };

    emailjs.send(serviceID, templateID, formDataWithExtras, userID).then(
      (result) => {
        toast.success("✅ Form submitted successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      },
      (error) => {
        toast.error("❌ Something went wrong!");
      }
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
            type="button"
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
            <input 
              type="text" 
              placeholder={field} 
              className="input-field" 
              name={field.toLowerCase().replace(/\s/g, "_")} 
              value={formData[field.toLowerCase().replace(/\s/g, "_")]} 
              onChange={handleChange} 
              required 
            />
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

        <input type="hidden" name="budget" value={activeBudget} />

        <div className="project-details">
          <h3 className="project-text">Share details about your project</h3>
          <br />
          <textarea 
            name="project_details" 
            rows={10} 
            cols={150} 
            value={formData.project_details} 
            onChange={handleChange} 
            required
          ></textarea>
        </div>

        <div className="captcha-button-container">
          <ReCAPTCHA 
            className="recaptcha" 
            sitekey="6Lc2NtgqAAAAABlmb_4MIxSLqcQDPNtq39NZCFcK" 
            onChange={handleCaptchaChange} 
          />
          <button type="submit" className="submit-buttons">
            Submit Form
          </button>
        </div>
      </form>

      {/* Toast Container for Notifications */}
      <ToastContainer position="bottom-center" autoClose={3000} />
    </div>
  );
};

export default Contact;
