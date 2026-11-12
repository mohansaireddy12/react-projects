import React from "react";
import { useState } from "react";
function App() {
  const [sent, setSent] = useState(false);
  function submit(event) { event.preventDefault(); setSent(true); }
  return <div className="container"><div className="form-container"><h1>Get in Touch</h1><p>Fill out the form below to contact us</p>{sent ? <p role="status">Thanks for your message. We'll be in touch soon.</p> : <form onSubmit={submit}><div className="input-group"><div className="input-field"><i className="fas fa-user"></i><input type="text" placeholder="Name" required /></div><div className="input-field"><i className="fas fa-envelope"></i><input type="email" placeholder="Email" required /></div><div className="input-field"><i className="fas fa-phone"></i><input type="tel" placeholder="Phone (optional)" /></div><div className="input-field"><i className="fas fa-tag"></i><input type="text" placeholder="Subject" required /></div></div><div className="message-field"><i className="fas fa-message"></i><textarea placeholder="Your Message" required></textarea></div><button type="submit"><div className="btn-content"><span>Send Message</span><i className="fas fa-paper-plane"></i></div></button></form>}<div className="contact-info"><div className="info-item"><i className="fas fa-map-marker-alt"></i><span>123 Main Street, City, Country</span></div><div className="info-item"><i className="fas fa-envelope"></i><span>contact@example.com</span></div><div className="info-item"><i className="fas fa-phone"></i><span>+1 234 567 8900</span></div></div></div></div>;
}
export default App;
