import React, { useState } from "react";
 import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
 import "./App.css";
 
 function Home() {
   return (
     <div className="container">
       <h1>Welcome to My React App</h1>
       <Link to="/form" className="button">Go to Form</Link>
     </div>
   );
 }
 
 function FormPage() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [submitted, setSubmitted] = useState(false);
 
   const handleSubmit = (e) => {
     e.preventDefault();
     setSubmitted(true);
   };
 
   return (
     <div className="container">
       <h2>Contact Form</h2>
       {submitted ? (
         <h3>Thank you, {name}! Your message has been received.</h3>
       ) : (
         <form onSubmit={handleSubmit}>
           <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required />
           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" required />
           <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" required />
           <button type="submit">Submit</button>
         </form>
       )}
       <Link to="/" className="button">Back to Home</Link>
     </div>
   );
 }
 
 function App() {
   return (
     <Router>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/form" element={<FormPage />} />
       </Routes>
     </Router>
   );
 }
 
 export default App;
You sent
src/App.test.js
