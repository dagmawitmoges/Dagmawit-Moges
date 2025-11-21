import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Send, 
  MapPin, 
  Phone,
  ExternalLink 
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Configure this env variable in your Vite env (.env) when you deploy.
  // Example: VITE_CONTACT_ENDPOINT=https://formspree.io/f/your_form_id
  const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // If an endpoint is configured (e.g., Formspree), POST the form data there.
    if (ENDPOINT) {
      setStatus('sending');
      setErrorMessage(null);

      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('subject', formData.subject);
      payload.append('message', formData.message);

      fetch(ENDPOINT, {
        method: 'POST',
        body: payload,
        headers: {
          // Let Formspree or similar handle the Accept header
          Accept: 'application/json'
        }
      })
        .then(async (res) => {
          if (res.ok) {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
          } else {
            const text = await res.text();
            setStatus('error');
            setErrorMessage(text || 'Failed to send message');
          }
        })
        .catch((err) => {
          setStatus('error');
          setErrorMessage(err.message || 'Network error');
        });

      return;
    }

    // Fallback: open user's mail client via mailto: (not ideal but works without server)
    const mailto = `mailto:dagmawitmoges@email.com?subject=${encodeURIComponent(
      formData.subject || 'New contact'
    )}&body=${encodeURIComponent(`Name: ${formData.name}\n\n${formData.message}\n\nReply to: ${formData.email}`)}`;
    window.location.href = mailto;
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "dagmawitmoges@email.com",
      href: "mailto:dagmawitmoges@email.com"
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+251 904660026",
      href: "tel:+251xxxxxxxxx"
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Addis Ababa, Ethiopia",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "#https://www.linkedin.com/in/dagmawit-moges-ali-8b355b291/",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      href: "#",
      color: "hover:text-gray-800"
    },
    {
      icon: <ExternalLink size={20} />,
      label: "Fiverr",
      href: "#",
      color: "hover:text-green-600"
    }
  ];

  const projectTypes = [
    "Web Development",
    "Mobile App Development",
    "Fashion-Tech Solutions",
    "Healthcare Systems",
   "UI/UX Design",
    "Technical Consulting",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            Ready to turn your vision into reality? Let's discuss how we can create something exceptional together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-navy-900 mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-vintage-100 p-3 rounded-lg text-vintage-600">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-navy-500 font-medium">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-navy-700 hover:text-vintage-600 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-navy-700">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-navy-900 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`bg-white p-3 rounded-lg text-navy-600 ${social.color} transition-all duration-200 hover:shadow-md`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-navy-900 p-6 rounded-lg text-white">
              <h4 className="font-playfair text-xl font-bold mb-3">
                Work With Me
              </h4>
              <p className="text-cream-200 text-sm mb-4">
                Available for freelance projects and consulting opportunities.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-vintage-600 text-white px-4 py-2 rounded-sm text-sm font-medium hover:bg-vintage-700 transition-colors duration-200"
              >
                View Fiverr Profile
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-vintage-200 focus:border-vintage-400 transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-vintage-200 focus:border-vintage-400 transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-navy-700 mb-2">
                  Project Type
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-vintage-200 focus:border-vintage-400 transition-colors duration-200"
                >
                  <option value="">Select a project type</option>
                  {projectTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-2">
                  Project Details 
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-vintage-200 focus:border-vintage-400 transition-colors duration-200"
                  placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-navy-900 text-white py-4 rounded-lg font-medium hover:bg-vintage-700 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </>
                )}
              </button>

              <p className="text-sm text-navy-500 mt-4 text-center">
                I typically respond within 24 hours. Looking forward to hearing from you!
              </p>
              {status === 'success' && (
                <p className="text-sm text-green-600 mt-4 text-center">Thanks — your message has been sent.</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-600 mt-4 text-center">Error sending message: {errorMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;