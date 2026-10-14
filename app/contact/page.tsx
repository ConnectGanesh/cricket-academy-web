'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-lg mt-4">Get in touch with Elite Cricket Academy</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">📍 Location</h3>
              <p className="text-gray-700">Elite Cricket Academy<br/>123 Sports Avenue<br/>City, State 12345<br/>India</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">📞 Contact Info</h3>
              <p className="text-gray-700">
                Phone: +91 (XXX) XXX-XXXX<br/>
                Email: info@cricketacademy.com<br/>
                Hours: 7 AM - 7 PM IST<br/>
                Monday - Sunday
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            
            {submitted && (
              <div className="mb-6 bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
                <p className="font-bold">✓ Success!</p>
                <p>Thank you for your message. We'll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Subject *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                >
                  <option value="">Select a subject</option>
                  <option value="admission">Admission Inquiry</option>
                  <option value="coaching">Coaching Programs</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
