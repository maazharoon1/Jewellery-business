import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';
import { SERVICE_OPTIONS } from '../config/business';

interface ContactFormProps {
  heading?: string;
  subheading?: string;
  isStandalonePage?: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  heading = 'Let’s Create Something Personal.',
  subheading = 'Tell us what you’re looking for and we’ll help you take the next step.',
  isStandalonePage = false
}) => {
  const { config } = useBusiness();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: SERVICE_OPTIONS[0],
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate luxury response dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: SERVICE_OPTIONS[0],
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      className={`px-6 md:px-12 ${
        isStandalonePage ? 'py-16 sm:py-24' : 'py-24 lg:py-32 bg-[#FDFCFB] border-b border-[#E5E1DA]'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Atelier Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#7A756D] font-semibold mb-2">
                Get In Touch
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] tracking-tight font-normal mb-3">
                {heading}
              </h2>
              <p className="text-[14px] text-[#4A4742] font-normal leading-relaxed">
                {subheading}
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-[#E5E1DA] text-sm text-[#4A4742]">
              {config.designerName && (
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#7A756D] font-semibold mb-1">
                    Designer & Principal
                  </p>
                  <p className="font-serif text-lg text-[#1A1A1A]">{config.designerName}</p>
                </div>
              )}

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#7A756D] font-semibold mb-1">
                  Direct Phone
                </p>
                <a
                  href={`tel:${config.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-[#1A1A1A] font-medium flex items-center gap-2 transition-colors text-[#1A1A1A]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#7A756D] stroke-[1.5]" />
                  <span>{config.phone}</span>
                </a>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#7A756D] font-semibold mb-1">
                  Studio Inquiries
                </p>
                <a
                  href={`mailto:${config.email}`}
                  className="hover:text-[#1A1A1A] font-medium flex items-center gap-2 transition-colors text-[#1A1A1A]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#7A756D] stroke-[1.5]" />
                  <span>{config.email}</span>
                </a>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#7A756D] font-semibold mb-1">
                  Location & Appointments
                </p>
                <div className="flex items-start gap-2 text-[#4A4742]">
                  <MapPin className="w-3.5 h-3.5 text-[#7A756D] stroke-[1.5] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-[#1A1A1A]">{config.address}</p>
                    <p className="text-xs text-[#7A756D]">{config.cityRegion}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Elegant Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-[#E5E1DA] rounded-sm p-8 sm:p-12 shadow-xs">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="py-12 text-center space-y-4"
                >
                  <CheckCircle2 className="w-10 h-10 text-[#1A1A1A] mx-auto stroke-[1.5]" />
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-normal">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-[#4A4742] font-light max-w-md mx-auto leading-relaxed">
                    Thank you. We will review your inquiry with careful attention and be in touch promptly to discuss your piece.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-medium text-[#1A1A1A] border-b border-[#1A1A1A] pb-1 hover:opacity-60"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="inquiry-name"
                        className="block text-[10px] uppercase tracking-[0.2em] text-[#7A756D] font-semibold mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="inquiry-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-[#FDFCFB] border border-[#E5E1DA] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#1A1A1A] rounded-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-phone"
                        className="block text-[10px] uppercase tracking-[0.2em] text-[#7A756D] font-semibold mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="inquiry-phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 bg-[#FDFCFB] border border-[#E5E1DA] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#1A1A1A] rounded-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="inquiry-email"
                        className="block text-[10px] uppercase tracking-[0.2em] text-[#7A756D] font-semibold mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="inquiry-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 bg-[#FDFCFB] border border-[#E5E1DA] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#1A1A1A] rounded-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-service"
                        className="block text-[10px] uppercase tracking-[0.2em] text-[#7A756D] font-semibold mb-2"
                      >
                        Service of Interest
                      </label>
                      <select
                        id="inquiry-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FDFCFB] border border-[#E5E1DA] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#1A1A1A] rounded-sm transition-colors"
                      >
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-message"
                      className="block text-[10px] uppercase tracking-[0.2em] text-[#7A756D] font-semibold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details regarding timeline, metals, or inspiration..."
                      className="w-full px-4 py-3 bg-[#FDFCFB] border border-[#E5E1DA] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#1A1A1A] rounded-sm transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="submit-inquiry-btn"
                    className="w-full py-3.5 px-6 bg-[#1A1A1A] text-white text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-neutral-800 active:scale-[0.99] transition-all flex items-center justify-center gap-3 disabled:opacity-60 border border-[#1A1A1A] rounded-sm"
                  >
                    <span>{isSubmitting ? 'SENDING...' : 'SEND INQUIRY'}</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[1.5]" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
