import React, { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { SEO } from "@/components/SEO";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // In a real application, submit to backend here.
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
      <SEO 
        title="Contact Us" 
        description="Get in touch with the team at Rural Utility Cost to report bugs, suggest features, or provide feedback." 
        canonicalUrl="https://greenhouse.ruralutilitycost.com/contact" 
      />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 border-b border-slate-100 pb-4">
        Contact Us
      </h1>
      <div className="prose prose-slate text-slate-700 space-y-6">
        <p>
          We welcome feedback, suggestions for new calculators, and bug reports. Whether you're an operator with historical data to help calibrate the models or a user who spotted an error, we want to hear from you.
        </p>

        <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-lg border border-slate-200 mt-6 mb-8">
          <div className="bg-white p-3 rounded-full shadow-sm">
            <Mail className="w-6 h-6 text-slate-600" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 m-0">Email the team</h3>
            <a href="mailto:contact@ruralutilitycost.com" className="text-green-600 hover:text-green-700 hover:underline no-underline">
              contact@ruralutilitycost.com
            </a>
          </div>
        </div>

        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-900 m-0">Message Sent Successfully</h3>
              <p className="text-green-800 text-sm mt-1">Thank you for reaching out. We will get back to you shortly.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-4 text-sm font-medium text-green-700 hover:text-green-800 underline focus:outline-none"
              >
                Send another message
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mt-8" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(p => ({...p, name: e.target.value}))}
                className={`w-full px-4 py-2 rounded-md border min-h-[48px] focus:ring-2 focus:ring-green-500 focus:outline-none ${errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-slate-300'}`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(p => ({...p, email: e.target.value}))}
                className={`w-full px-4 py-2 rounded-md border min-h-[48px] focus:ring-2 focus:ring-green-500 focus:outline-none ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-slate-300'}`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData(p => ({...p, message: e.target.value}))}
                className={`w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-green-500 focus:outline-none ${errors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-slate-300'}`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 min-h-[48px]"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
