import * as React from 'react';
import { Section } from '../components/UI';

export default function About() {
  return (
    <div className="pt-20">
      <Section
        title="The Visionary Behind the Work"
        subtitle="About Ndivhuwo"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
              alt="Ndivhuwo - Architect"
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-0 right-0 h-full w-4 bg-blue-600 translate-x-4 lg:translate-x-8" />
          </div>
          
          <div className="space-y-8">
            <h3 className="text-4xl font-bold tracking-tighter uppercase">Ndivhuwo <span className="text-blue-600">Architects</span></h3>
            <div className="h-1 w-20 bg-blue-600" />
            
            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
              <p>
                Founded by Ndivhuwo, our studio is dedicated to the belief that every structure should be a testament to innovation and human-centric living. With over a decade of experience in residential architecture across South Africa, we've mastered the balance between bold creative expression and practical feasibility.
              </p>
              <p>
                Our vision is to reshape the African residential landscape, one home at a time. We prioritize sustainable materials, energy-efficient designs, and spatial configurations that foster authentic human connection.
              </p>
              
              <div className="pt-8">
                <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 mb-8">Our Core Principles</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                  <div>
                    <h6 className="font-bold uppercase tracking-widest text-gray-900 mb-2">Sustainable Innovation</h6>
                    <p className="text-gray-500">Integrating green technologies into every design to reduce environmental impact.</p>
                  </div>
                  <div>
                    <h6 className="font-bold uppercase tracking-widest text-gray-900 mb-2">Honest Materiality</h6>
                    <p className="text-gray-500">Choosing materials that age gracefully and reflect the local spirit.</p>
                  </div>
                  <div>
                    <h6 className="font-bold uppercase tracking-widest text-gray-900 mb-2">Functional Fluidity</h6>
                    <p className="text-gray-500">Creating spaces that adapt to the evolving needs of modern families.</p>
                  </div>
                  <div>
                    <h6 className="font-bold uppercase tracking-widest text-gray-900 mb-2">Timeless Aesthetic</h6>
                    <p className="text-gray-500">Designs that remain relevant and beautiful decades after completion.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
