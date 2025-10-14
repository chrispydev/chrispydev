"use client";

import Header from "@/components/header";
import { useState } from "react";
import axios from "axios";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
    website: "", // honeypot field
  });

  const [status, setStatus] = useState<null | "success" | "error" | "submitting">(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // honeypot check
    if (formData.website) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      // ✅ Replace with your Formspree endpoint (from your old form)
      const response = await axios.post(process.env.NEXT_PUBLIC_FORMSPREE_URL!, {
        data: {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          budget: formData.budget,
          message: formData.message,
        },
      });

      if (response.status === 200) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          budget: "",
          message: "",
          website: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <main>
      <Header
        headerText="Let’s Create Something Amazing"
        typewriter={[
          "Tell me about your project — I’m ready to help bring your ideas to life.",
        ]}
      />

      <section className="py-8">
        {/* <section className="py-24 "> */}
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Get in Touch
          </h2>
          <form
            onSubmit={handleSubmit}
            className="border border-secondary p-8 rounded-xl space-y-6"
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
                  className="w-full border border-secondary rounded-lg p-4 focus:border-success"
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
                  className="w-full border border-secondary rounded-lg p-4 focus:border-success"
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
                className="w-full border border-secondary rounded-lg p-4 focus:border-success"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="bg-secondary text-white px-6 py-3 rounded-xl font-semibold hover:bg-secondary transition"
            >
              {status === "submitting"
                ? "Submitting..."
                : status === "success"
                  ? "Submitted ✅"
                  : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-success mt-4">
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

