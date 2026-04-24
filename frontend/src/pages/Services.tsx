import * as React from 'react';
import { Section, Button } from '../components/UI';
import { Send, FileText, CheckCircle } from 'lucide-react';

export default function Services() {
  return (
    <div className="pt-20">
      <Section
        title="Custom Architecture Solutions"
        subtitle="Services"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="text-3xl font-bold mb-8">Your Vision, Our Expertise</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Transforming a dream into a physical home requires a deep understanding of space, light, and materiality. 
              Our custom design service is a collaborative journey where we work one-on-one with you to craft a 
              living environment that is uniquely yours.
            </p>
            
            <ul className="space-y-6">
              {[
                { title: 'Bespoke Architectural Design', desc: 'Custom tailored blueprints for luxury residential homes.' },
                { title: 'Project Management & Consultation', desc: 'Expert guidance from site analysis to final construction.' },
                { title: 'Interior Architecture', desc: 'Harmonizing the inner experience with the outer structure.' },
                { title: 'Renovation & Extensions', desc: 'Breathe new life into existing structures with modern interventions.' }
              ].map((s, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="mt-1"><CheckCircle size={20} className="text-blue-600" /></div>
                  <div>
                    <h5 className="font-bold uppercase tracking-widest text-sm mb-1">{s.title}</h5>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-50 p-10 lg:p-16 border border-gray-100">
            <h4 className="text-xl font-bold mb-8 uppercase tracking-widest flex items-center gap-3 border-b border-gray-200 pb-4">
              <FileText size={20} className="text-blue-600" /> Request Custom Design
            </h4>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-[0.2em] mb-2">First Name</label>
                  <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:border-blue-600 outline-none transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-[0.2em] mb-2">Last Name</label>
                  <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:border-blue-600 outline-none transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-[0.2em] mb-2">Email Address</label>
                <input type="email" className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:border-blue-600 outline-none transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-[0.2em] mb-2">Project Brief</label>
                <textarea rows={4} className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:border-blue-600 outline-none transition-colors" placeholder="Tell us about your dream home location, size, and style..." />
              </div>
              <Button className="w-full py-5 group">
                Submit Consultation Request
                <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-20 border-t border-gray-100">
          <span className="block text-[10px] font-bold tracking-[0.4em] uppercase text-blue-600 text-center mb-16">The Design Process</span>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            {[
              { num: '01', title: 'Consultation', desc: 'Understanding your vision and site specifics.' },
              { num: '02', title: 'Concept', desc: 'Preliminary sketches and 3D volume studies.' },
              { num: '03', title: 'Refinement', desc: 'Detailed technical drawings and material selection.' },
              { num: '04', title: 'Execution', desc: 'Council submissions and builder coordination.' }
            ].map(step => (
              <div key={step.num}>
                <span className="block text-5xl font-bold text-gray-100 mb-6">{step.num}</span>
                <h5 className="font-bold uppercase tracking-[0.2em] text-xs mb-4">{step.title}</h5>
                <p className="text-gray-500 text-sm leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
