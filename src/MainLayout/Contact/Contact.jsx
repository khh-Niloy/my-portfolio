import React, { useState } from "react";
import { Send, Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <h1 id="Contact" className="text-4xl text-center mb-10 font-semibold">
        Contact With Me
      </h1>
      <div className="w-[80%] mx-auto px-4 py-16 flex gap-5">
        {/* Talk to Me Section */}
        <div className="w-[40%]">
          <h2 className="text-2xl font-medium mb-8 text-gray-800">
            Talk to me
          </h2>

          <div className="space-y-4">
            {/* Email Card */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border-[1.3px] border-white transition-all duration-300 hover:bg-white/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <div className="flex flex-col items-center">
                <Mail className="h-6 w-6 mb-2 text-gray-700 transition-colors group-hover:text-gray-900" />
                <h3 className="text-sm font-medium text-gray-800">Email</h3>
                <p className="text-sm text-gray-600 mb-3">user@gmail.com</p>
                <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-all hover:gap-2">
                  Write me{" "}
                  <span className="transform transition-transform">→</span>
                </button>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border-[1.3px] border-white transition-all duration-300 hover:bg-white/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <div className="flex flex-col items-center">
                <svg
                  className="h-6 w-6 mb-2 text-gray-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22H17V20H12C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12V13.5C20 14.88 18.88 16 17.5 16C16.12 16 15 14.88 15 13.5V12C15 9.24 12.76 7 10 7C7.24 7 5 9.24 5 12C5 14.76 7.24 17 10 17C11.38 17 12.64 16.44 13.54 15.53C14.19 16.42 15.31 17 16.5 17C19.02 17 21 15.02 21 12.5V12C21 6.48 16.52 2 12 2ZM10 15C8.34 15 7 13.66 7 12C7 10.34 8.34 9 10 9C11.66 9 13 10.34 13 12C13 13.66 11.66 15 10 15Z" />
                </svg>
                <h3 className="text-sm font-medium text-gray-800">Whatsapp</h3>
                <p className="text-sm text-gray-600 mb-3">999-888-777</p>
                <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-all hover:gap-2">
                  Write me{" "}
                  <span className="transform transition-transform">→</span>
                </button>
              </div>
            </div>

            {/* Messenger Card */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border-[1.3px] border-white transition-all duration-300 hover:bg-white/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <div className="flex flex-col items-center">
                <MessageSquare className="h-6 w-6 mb-2 text-gray-700" />
                <h3 className="text-sm font-medium text-gray-800">Messenger</h3>
                <p className="text-sm text-gray-600 mb-3">user.fb123</p>
                <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-all hover:gap-2">
                  Write me{" "}
                  <span className="transform transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Write Me Your Project Section */}
        <div className="w-[60%]">
          <h2 className="text-2xl font-medium mb-8 text-gray-800">
            Write me your project
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">Name</p>
              <input
                type="text"
                placeholder="Insert your name"
                className="w-full p-3 placeholder:text-xs rounded-lg bg-white/80 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-white/95 transition-all duration-300"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2">Mail</p>
              <input
                type="email"
                placeholder="Insert your email"
                className="w-full p-3 rounded-lg placeholder:text-xs bg-white/80 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-white/95 transition-all duration-300"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2">Project</p>
              <textarea
                placeholder="Write your project"
                rows={5}
                className="resize-none h-[11.3rem] w-full p-3 rounded-lg placeholder:text-xs bg-white/80 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-white/95 transition-all duration-300"
                value={formData.project}
                onChange={(e) =>
                  setFormData({ ...formData, project: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-700 hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
            >
              Send Message <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
