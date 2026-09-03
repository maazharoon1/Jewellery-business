import React from 'react';
import { useBusiness } from '../context/BusinessContext';
import { ContactForm } from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { config } = useBusiness();

  return (
    <div className="w-full bg-[#FDFCFB]">
      {/* Contact Page Header */}
      <div className="pt-16 sm:pt-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <div className="text-[10px] uppercase tracking-[0.2em] text-[#7A756D] font-semibold mb-2">
            Appointments & Inquiries
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] tracking-tight font-normal mb-4">
            Contact & Consultations
          </h1>
          <p className="text-[14px] text-[#4A4742] font-normal leading-relaxed">
            Every bespoke inquiry, ring sizing, or restoration begins with a dedicated personal conversation.
          </p>
        </div>
      </div>

      {/* Embedded Full Contact Form */}
      <ContactForm
        heading="Begin a Dialogue"
        subheading="Share your vision or inquiry below and we will contact you directly to arrange an appointment."
        isStandalonePage={true}
      />

      {/* Atelier Visit & Appointment Protocol */}
      <section className="pb-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="p-8 sm:p-12 bg-white border border-[#E5E1DA] rounded-sm shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#1A1A1A] text-[10px] tracking-[0.2em] uppercase font-semibold">
                <Clock className="w-3.5 h-3.5 text-[#7A756D] stroke-[1.5]" />
                <span>Atelier Hours</span>
              </div>
              <p className="text-[13px] text-[#4A4742] font-normal leading-relaxed">
                Tuesday &ndash; Saturday: 10:00 AM &ndash; 6:00 PM<br />
                Sunday &ndash; Monday: Reserved for private commissions
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#1A1A1A] text-[10px] tracking-[0.2em] uppercase font-semibold">
                <Calendar className="w-3.5 h-3.5 text-[#7A756D] stroke-[1.5]" />
                <span>By Appointment</span>
              </div>
              <p className="text-[13px] text-[#4A4742] font-normal leading-relaxed">
                To provide undivided attention, private showroom viewings and design consultations are scheduled in advance.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#1A1A1A] text-[10px] tracking-[0.2em] uppercase font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#7A756D] stroke-[1.5]" />
                <span>Service Region</span>
              </div>
              <p className="text-[13px] text-[#4A4742] font-normal leading-relaxed">
                {config.cityRegion}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
