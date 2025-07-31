import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-dark-text">Get in Touch</h2>
          <p className="text-dark-text/90">
            Have a question, suggestion, or partnership inquiry? We'd love to hear from you. Reach out to us through any of the channels below, or use the contact form.
          </p>
          <div>
            <h3 className="font-semibold text-dark-text">Address:</h3>
            <p className="text-dark-text/80">S-VYASA Deemed to be University School of Advanced Studies<br/>Sattva Global City, Mysore Rd, Remco Housing Society, Rajarajeshwari Nagar, Bengaluru,  <br/>Moneyville, India 500001</p>
          </div>
          <div>
            <h3 className="font-semibold text-dark-text">Email:</h3>
            <p className="text-dark-text/80"><a href="mailto:contact@havebite.com" className="text-primary hover:underline">Contact.5havebite@gmail.com</a></p>
          </div>
          <div>
            <h3 className="font-semibold text-dark-text">Phone:</h3>
            <p className="text-dark-text/80">8885780009</p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full bg-secondary/20 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold text-primary">Thank You!</h2>
                <p className="text-dark-text/90 mt-2">Your message has been sent. We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-text">Full Name</label>
                <input type="text" id="name" required className="mt-1 block w-full px-3 py-2 border border-dark-text/20 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-text">Email Address</label>
                <input type="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-dark-text/20 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark-text">Subject</label>
                <input type="text" id="subject" required className="mt-1 block w-full px-3 py-2 border border-dark-text/20 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-text">Message</label>
                <textarea id="message" rows={5} required className="mt-1 block w-full px-3 py-2 border border-dark-text/20 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white" />
              </div>
              <button type="submit" className="w-full bg-accent text-white font-bold py-3 rounded-lg hover:opacity-90 transition-colors">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
