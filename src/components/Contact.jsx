import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, Github, Linkedin, Twitter, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.phone && !/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number format';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: ''
      });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yadnyesh', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yadnyesh', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/yadnyesh', label: 'Twitter' }
  ];

  const ContactInfo = ({ icon: Icon, text, href, className = '' }) => (
    <a
      href={href}
      className={`group flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 ${className}`}
    >
      <div className="p-2 rounded-full bg-blue-100 dark:bg-gray-700 group-hover:bg-blue-200 dark:group-hover:bg-gray-600 transition-colors duration-300">
        <Icon className="text-blue-600 dark:text-blue-400" size={20} />
      </div>
      <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {text}
      </span>
    </a>
  );

  const FormField = ({ label, error, children }) => (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      {children}
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
          <AlertCircle size={14} />
          {error}
        </p>
      )}
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Let's Connect
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Drop me a message below and I'll get back to you as soon as possible.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side: Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-xl rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <ContactInfo
                  icon={Mail}
                  text="yadnyeshavinash.b22@iiits.in"
                  href="mailto:yadnyeshavinash.b22@iiits.in"
                />
                <ContactInfo
                  icon={Phone}
                  text="+91 9699909117"
                  href="tel:+91 9699909117"
                />
                <ContactInfo
                  icon={MapPin}
                  text="Maharashtra, India"
                  href="https://maps.google.com"
                />
              </div>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-xl rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Connect on Social Media
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    <Icon className="text-blue-600 dark:text-blue-400 mb-2" size={24} />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side: Contact Form */}
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-xl rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField label="Name" error={errors.name}>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white transition-all duration-300"
                    placeholder="John Doe"
                  />
                </FormField>

                <FormField label="Email" error={errors.email}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </FormField>
              </div>

              <FormField label="Phone (Optional)" error={errors.phone}>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white transition-all duration-300"
                  placeholder="+1 (234) 567-8900"
                />
              </FormField>

              <FormField label="Subject" error={errors.subject}>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white transition-all duration-300"
                  placeholder="What would you like to discuss?"
                />
              </FormField>

              <FormField label="Message" error={errors.message}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white resize-none transition-all duration-300"
                  placeholder="Your message here..."
                />
              </FormField>

              {errors.submit && (
                <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-900 flex items-center space-x-2">
                  <AlertCircle size={20} />
                  <span>{errors.submit}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {showSuccess && (
              <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-900 flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="text-center text-gray-600 dark:text-gray-400 mt-12">
        <p className="flex items-center justify-center">
          <span>Made with</span>
          <span className="text-2xl mx-2" role="img" aria-label="love">❤️</span>
          <span>by Yadnyesh Badgujar</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;