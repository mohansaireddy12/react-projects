import React from "react";
import { useState } from "react";
function App() {
  const [subscribed, setSubscribed] = useState(false);
  function submit(event) { event.preventDefault(); setSubscribed(true); }
  return <div className="signup-container"><div className="icon-container"><i className="far fa-envelope-open"></i></div><h2>Join Our Newsletter</h2><p>Get the latest updates and coding tips straight to your inbox.</p>{subscribed ? <p role="status">Thanks for subscribing! Please check your inbox.</p> : <form onSubmit={submit}><div className="input-group"><i className="far fa-envelope"></i><input type="email" required placeholder="Enter your email" /></div><button type="submit">Subscribe <i className="fas fa-arrow-right"></i></button></form>}<div className="benefits"><p className="benefit-item"><i className="fas fa-check"></i> Weekly coding tips</p><p className="benefit-item"><i className="fas fa-check"></i> No spam, unsubscribe anytime</p></div></div>;
}
export default App;
