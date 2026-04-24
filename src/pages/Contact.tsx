import * as React from 'react';
import { Section, Button } from '../components/UI';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      <Section
        title="Start Your Project"
        subtitle="Get In Touch"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold mb-8">We'd love to hear from you</h3>
            <p className="text-gray-600 mb-12 text-lg leading-relaxed">
              Whether you have a question about our house plans or are ready to begin a custom design, our team is here to help you every step of the way.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="bg-blue-50 p-4 w-fit h-fit"><MapPin size={24} className="text-blue-600" /></div>
                <div>
                  <h5 className="font-bold uppercase tracking-widest text-xs mb-1">Our Studio</h5>
                  <p className="text-gray-500 text-sm">123 Architect Ave, Design District<br />Johannesburg, South Africa</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-blue-50 p-4 w-fit h-fit"><Phone size={24} className="text-blue-600" /></div>
                <div>
                  <h5 className="font-bold uppercase tracking-widest text-xs mb-1">Call Us</h5>
                  <p className="text-gray-500 text-sm">+27 11 000 0000<br />Mon - Fri, 9am - 5pm</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-blue-50 p-4 w-fit h-fit"><Mail size={24} className="text-blue-600" /></div>
                <div>
                  <h5 className="font-bold uppercase tracking-widest text-xs mb-1">Email Us</h5>
                  <p className="text-gray-500 text-sm">info@ndivhuwoarchitects.com<br />support@ndivhuwoarchitects.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-2xl p-8 lg:p-12 border border-gray-50">
            <h4 className="text-xl font-bold mb-8 uppercase tracking-widest border-b border-gray-100 pb-4">Send a Message</h4>
            <form className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-[0.2em] mb-2">Full Name</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-100 px-4 py-4 text-sm focus:border-blue-600 focus:bg-white outline-none transition-all" placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-[0.2em] mb-2">Email Address</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-100 px-4 py-4 text-sm focus:border-blue-600 focus:bg-white outline-none transition-all" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-[0.2em] mb-2">Message</label>
                <textarea rows={6} className="w-full bg-gray-50 border border-gray-100 px-4 py-4 text-sm focus:border-blue-600 focus:bg-white outline-none transition-all resize-none" placeholder="How can we help you today?" />
              </div>
              <Button className="w-full py-5 group">
                Send Message
                <Send size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
