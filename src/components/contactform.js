import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Form } from 'react-bootstrap';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailTo = `mailto:ellie@epklabs.com?subject=${encodeURIComponent(name)}&body=${encodeURIComponent(message)}&cc=${email}`;
    window.location.href = mailTo;
    setFormData({ name: '', email: '', message: '' });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
}
export default ContactForm