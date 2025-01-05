import React, { useState } from 'react';
import { Send, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Talk to Me Section */}
      <div>
        <h2 className="text-2xl font-medium mb-8">Talk to me</h2>
        
        <div className="space-y-4">
          {/* Email Card */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex flex-col items-center">
              <Mail className="h-6 w-6 mb-2" />
              <h3 className="text-sm font-medium">Email</h3>
              <p className="text-sm text-gray-600 mb-3">user@gmail.com</p>
              <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center">
                Write me →
              </button>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex flex-col items-center">
              <svg className="h-6 w-6 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22H17V20H12C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12V13.5C20 14.88 18.88 16 17.5 16C16.12 16 15 14.88 15 13.5V12C15 9.24 12.76 7 10 7C7.24 7 5 9.24 5 12C5 14.76 7.24 17 10 17C11.38 17 12.64 16.44 13.54 15.53C14.19 16.42 15.31 17 16.5 17C19.02 17 21 15.02 21 12.5V12C21 6.48 16.52 2 12 2ZM10 15C8.34 15 7 13.66 7 12C7 10.34 8.34 9 10 9C11.66 9 13 10.34 13 12C13 13.66 11.66 15 10 15Z" />
              </svg>
              <h3 className="text-sm font-medium">Whatsapp</h3>
              <p className="text-sm text-gray-600 mb-3">999-888-777</p>
              <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center">
                Write me →
              </button>
            </div>
          </div>

          {/* Messenger Card */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex flex-col items-center">
              <MessageSquare className="h-6 w-6 mb-2" />
              <h3 className="text-sm font-medium">Messenger</h3>
              <p className="text-sm text-gray-600 mb-3">user.fb123</p>
              <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center">
                Write me →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Write Me Your Project Section */}
      <div>
        <h2 className="text-2xl font-medium mb-8">Write me your project</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <p className="text-sm text-gray-500 mb-2">Name</p>
            <input
              type="text"
              placeholder="Insert your name"
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-2">Mail</p>
            <input
              type="email"
              placeholder="Insert your email"
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">Project</p>
            <textarea
              placeholder="Write your project"
              rows={4}
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300"
              value={formData.project}
              onChange={(e) => setFormData({ ...formData, project: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
          >
            Send Message <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;