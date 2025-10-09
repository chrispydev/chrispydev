"use client";

import Header from "@/components/header";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
    website: "", // honeypot field
  });

  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // honeypot check
    if (formData.website) {
      setStatus("error");
      return;
    }

    // 👉 replace with API endpoint (e.g., /api/contact) or 3rd party service
    console.log("Form submitted:", formData);
    setStatus("success");
    setFormData({
      name: "",
      email: "",
      company: "",
      budget: "",
      message: "",
      website: "",
    });
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <Header headerText="Let’s Build Something Great Together." typewriter={["Tell us about your project — we’re ready to bring it to life."]} />

      {/* Calendly Embed */}
      <section id="calendly" className="py-24 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Schedule a Call
        </h2>
        <div className="w-full h-[650px]">
          <iframe
            src="https://calendly.com/YOUR-CALENDLY-USERNAME"
            width="100%"
            height="100%"
            className="rounded-xl shadow-lg border"
          ></iframe>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Or Send Us a Message
          </h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg space-y-6"
          >
            {/* Honeypot field (hidden from humans) */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>

            {status === "success" && (
              <p className="text-green-600 mt-4">
                ✅ Thank you! We’ll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-4">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

