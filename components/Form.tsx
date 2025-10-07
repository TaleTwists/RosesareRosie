"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import{ Send} from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  message: string;
}

const Form = () => {
    const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (
    e: FormEvent<HTMLFormElement | HTMLButtonElement>
  ): void => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
            <p className="text-gray-600 uppercase tracking-wider text-sm mb-2">
              CONTACT US
            </p>
            <h2 className="text-3xl font-bold mb-8">
              We Love to{" "}
              <span className="text-yellow-600 italic"> hear from you!</span>
            </h2>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 tracking-wide">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ex. John Doe"
                    className="w-full px-4 py-3 bg-gray-100 border-shop_light_green border-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    required
                  />
                </div>
                <div>
                <label className="block text-sm font-medium mb-2 tracking-wide">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  pattern="[0-9\s\-\+\(\)]+"
                  className="w-full px-4 py-3 bg-gray-100  border-shop_light_green border-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  required
                />
              </div>
              </div>
            
              <div>
                <label className="block text-sm font-medium mb-2 tracking-wide">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter here..."
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-100rounded focus:outline-none focus:ring-2 focus:ring-emerald-600 resize-none border-shop_light_green border-2"
                  required
                ></textarea>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-3 rounded transition-colors"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </div>
          </div>
  )
}

export default Form
