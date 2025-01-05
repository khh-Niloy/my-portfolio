import React, { useState } from "react";
import { Send, Mail, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0ovaa67", "template_xmrqy23", form.current, {
        publicKey: "2lnxgrL-gZWZCnyVy",
      })
      .then(
        () => {
          toast.success("Your message has been sent successfully");
          e.target.reset();
          setFormData({ name: "", email: "", project: "" });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <h1 id="Contact" className="text-4xl text-center mb-10 font-semibold">
        Contact With Me
      </h1>
      <div className="w-[80%] mx-auto px-4 pb-16 pt-10 flex lg:flex-row flex-col gap-8">
        {/* Talk to Me Section */}
        <div className="lg:w-[40%]">
          <h2 className="text-2xl lg:text-left text-center font-medium mb-8 text-gray-800">
            Talk to me
          </h2>

          <div className="space-y-4">
            {/* Email Card */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border-[1.3px] border-[brown]/20 transition-all duration-300 hover:bg-white/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <div className="flex flex-col items-center">
                <Mail className="h-6 w-6 mb-2 text-gray-700 transition-colors group-hover:text-gray-900" />
                <h3 className="text-sm font-medium text-gray-800">Email</h3>
                <p className="text-sm text-gray-600 mb-3">
                  khhniloy0@gmail.com
                </p>
                <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-all hover:gap-2">
                  Write me{" "}
                  <span className="transform transition-transform">→</span>
                </button>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border-[1.3px] border-[brown]/20 transition-all duration-300 hover:bg-white/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <div className="flex flex-col items-center">
                <FaWhatsapp className="h-6 w-6 mb-2 text-gray-700 transition-colors group-hover:text-gray-900"></FaWhatsapp>
                <h3 className="text-sm font-medium text-gray-800">Whatsapp</h3>
                <p className="text-sm text-gray-600 mb-3">01915910291</p>
                <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-all hover:gap-2">
                  Write me{" "}
                  <span className="transform transition-transform">→</span>
                </button>
              </div>
            </div>

            {/* Messenger Card */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border-[1.3px] border-[brown]/20 transition-all duration-300 hover:bg-white/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <div className="flex flex-col items-center">
                <MessageSquare className="h-6 w-6 mb-2 text-gray-700" />
                <h3 className="text-sm font-medium text-gray-800">Messenger</h3>
                <p className="text-sm text-gray-600 mb-3">Khh Niloy</p>
                <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-all hover:gap-2">
                  Write me{" "}
                  <span className="transform transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Write Me Your Project Section */}
        <div className="lg:w-[60%]">
          <h2 className="text-2xl lg:mt-0 mt-20 lg:text-left text-center font-medium mb-8 text-gray-800">
            Write me your project
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">Name</p>
              <input
                type="text"
                name="name"
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
                name="email"
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
                name="brief"
                value={formData.project}
                onChange={(e) =>
                  setFormData({ ...formData, project: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="bg-gray-800 w-full text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-700 hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
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
