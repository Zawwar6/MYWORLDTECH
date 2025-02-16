import React, { useState } from "react";
import "./Contact.css";
import Footer from "../Footer/Footer";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  // ✅ Google Apps Script Web App URL (Replace with your actual URL)
  const scriptURL = "https://script.google.com/macros/s/AKfycbxbQheXn0HB74WOn50gvhGQd34jblr68UYDO_RdbnExCMy2yDMsLBB7BQPlHRy7qiSpDg/exec";


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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      toast.error("⚠️ Please verify reCAPTCHA!");
      return;
    }

    const formBody = new FormData();
    Object.keys(formData).forEach((key) => formBody.append(key, formData[key]));
    formBody.append("tasks", activeTasks.join(", "));
    formBody.append("budget", activeBudget);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formBody,
      });

      const result = await response.json();
      if (result.result === "success") {
        toast.success("✅ Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          company_name: "",
          your_designation: "",
          phone_number: "",
          project_details: "",
        });
        setActiveTasks([]);
        setActiveBudget("");
        setCaptchaValue(null);
      } else {
        toast.error("❌ Error: " + result.error);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("❌ Failed to send data!");
    }
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
            sitekey="6Lc2NtgqAAAAABlmb_4MIxSLqcQDPNtq39NZCFcK" // 🚀 Replace with your actual reCAPTCHA key
            onChange={handleCaptchaChange} 
          />
          <button type="submit" className="submit-buttons">
            Submit Form
          </button>
        </div>
      </form>

      <ToastContainer position="bottom-center" autoClose={3000} />
    </div>
  );
};

export default Contact;
