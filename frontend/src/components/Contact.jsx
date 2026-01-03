import React, { useState } from 'react';

const Contact = () => {
  // 1. Setup state for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Setup state for status messages
  const [status, setStatus] = useState({ type: '', msg: '' });

  // 2. Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    // Clear old status and show loading
    setStatus({ type: 'loading', msg: 'Connecting to server...' });

    try {
      // Updated to Port 5001 and used 127.0.0.1 for maximum stability
      const response = await fetch('http://127.0.0.1:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if the response is valid JSON
      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ type: 'success', msg: 'Message sent successfully! ✅' });
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        setStatus({ type: 'error', msg: data.message || 'Something went wrong. ❌' });
      }
    } catch (error) {
      console.error('Detailed Debugging Error:', error);
      // This triggers if the backend is not running or the port is wrong
      setStatus({ type: 'error', msg: 'Server is offline. ⚠️ Please check if Backend is running on Port 5001.' });
    }
  };

  return (
    <section className="py-24 px-6 bg-gray-900" id="contact">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Feel free to send me a message!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-300 mb-2 ml-1">Your Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe" 
                required
                className="bg-gray-800 text-white p-4 rounded-xl border border-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-300 mb-2 ml-1">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com" 
                required
                className="bg-gray-800 text-white p-4 rounded-xl border border-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-2 ml-1">Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can I help you?" 
              rows="6" 
              required
              className="bg-gray-800 text-white p-4 rounded-xl border border-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
            ></textarea>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <button 
              type="submit"
              disabled={status.type === 'loading'}
              className="w-full md:w-max px-12 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-bold rounded-xl shadow-lg transition-all duration-300"
            >
              {status.type === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
            
            {status.msg && (
              <p className={`text-base font-medium ${status.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                {status.msg}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;