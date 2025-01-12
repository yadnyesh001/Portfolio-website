import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const ContactInfo = ({ icon: Icon, text, href }) => (
    <a
      href={href}
      className="group flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300"
    >
      <div className="p-2 rounded-full bg-blue-100 dark:bg-gray-700 group-hover:bg-blue-200 dark:group-hover:bg-gray-600 transition-colors duration-300">
        <Icon className="text-blue-600 dark:text-blue-400" size={20} />
      </div>
      <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {text}
      </span>
    </a>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Let's Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Drop me a message below and I'll get back to you as soon as possible.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* Contact Info Card */}
          <div className="md:col-span-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-xl rounded-lg p-4">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Contact Information
              </h3>
              <div className="space-y-2">
                <ContactInfo
                  icon={Mail}
                  text="john.doe@example.com"
                  href="mailto:john.doe@example.com"
                />
                <ContactInfo
                  icon={Phone}
                  text="+1 234 567 890"
                  href="tel:+1234567890"
                />
                <ContactInfo
                  icon={MapPin}
                  text="San Francisco, CA"
                  href="https://maps.google.com"
                />
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="md:col-span-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-xl rounded-lg p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white resize-none transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
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
              <div className="mt-4 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-900">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
