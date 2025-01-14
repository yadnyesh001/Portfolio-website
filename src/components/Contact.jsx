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
    <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Let's Connect
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Have a question or want to work together? Drop me a message below and I'll get back to you as soon as possible.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left side: Contact Info */}
          <div className="space-y-6">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-xl rounded-lg p-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-2">
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
          </div>

          {/* Right side: Contact Form */}
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-xl rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
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
      <div className="text-center text-gray-600 dark:text-gray-400 mt-6 mb-0">
        <p className="flex items-center justify-center">
          <span>Made with</span>
          <span className="text-2xl mx-1" role="img" aria-label="love">❤️</span>
          <span>by Yadnyesh Badgujar</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;

