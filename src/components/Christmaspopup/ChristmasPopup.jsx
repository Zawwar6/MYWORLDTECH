import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChristmasPopup.css";

export default function ChristmasPopup() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  if (!open) return null;

  const handleContactClick = () => {
    setOpen(false);      // popup hide
    navigate("/contact"); // navigate to contact page
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box blue-theme">

        {/* Close button */}
        <button className="close-btn" onClick={() => setOpen(false)}>✖</button>

        <h2 className="titles">🎄 Christmas Special Offer 🎄</h2>
        <h1 className="off-text">50% OFF</h1>

        <p className="desc">
          Enjoy exclusive Christmas discounts on our premium services.
        </p>

        {/* Contact Button */}
        <button className="cta-btns" onClick={handleContactClick}>
          Contact Us
        </button>

      </div>
    </div>
  );
}
