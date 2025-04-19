import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
const JobForm = () => {
    const form = useRef();
  const [fileBase64, setFileBase64] = useState('');

  // Convert file to Base64 string
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFileBase64(reader.result); // this is the base64 string
    };
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Add attachment manually to form data
    const formData = new FormData(form.current);
    formData.append('attachment', fileBase64);

    emailjs
      .sendForm(
        'your_service_id',      // replace with your EmailJS service ID
        'your_template_id',     // replace with your EmailJS template ID
        form.current,
        'your_public_key'       // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Email sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send email');
        }
      );
  };


  return (
    <>
    <div>JobForm</div>
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Your Name" required />
      <input type="email" name="user_email" placeholder="Your Email" required />
      <input type="file" name="resume_file" onChange={handleFileChange} required />
      {/* Hidden input to pass Base64 string to template */}
      <input type="hidden" name="attachment" value={fileBase64} />
      <button type="submit">Send Resume</button>
    </form>
    </>
    

  )
}

export default JobForm