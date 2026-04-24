import * as React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Ruler, Bed, Bath, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section, Button } from '../components/UI';
import { PROJECTS, HOUSE_PLANS, TESTIMONIALS } from '../constants';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-gray-950">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000"
            alt="Modern Architecture"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <span className="inline-block text-blue-400 text-[10px] sm:text-xs font-bold tracking-[0.5em] uppercase mb-6">
              Precision. Passion. Architecture.
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
              Designing Your <br />
              <span className="text-blue-500">Dream Home</span>
            </h1>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-lg font-light">
              We specialize in creating modern, functional house plans that blend aesthetic elegance with structural precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                View House Plans
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <Section
        title="Elevating Contemporary Living"
        subtitle="About Ndivhuwo Architects"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              At Ndivhuwo Architects, we believe that great architecture should be accessible. Our mission is to provide world-class design solutions that are as functional as they are beautiful.
            </p>
            <p>
              Whether you are looking for a pre-designed house plan to jumpstart your project or require a bespoke custom home tailored to your unique lifestyle, our team delivers with uncompromising quality.
            </p>
            <div className="pt-4 grid grid-cols-2 gap-8">
              <div>
                <span className="block text-4xl font-bold text-gray-900 mb-1">150+</span>
                <span className="text-xs uppercase tracking-widest font-bold text-gray-400">Projects Done</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-gray-900 mb-1">12</span>
                <span className="text-xs uppercase tracking-widest font-bold text-gray-400">Awards Won</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="aspect-[4/3] bg-gray-100 overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                alt="Studio"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-8 -left-8 bg-blue-600 p-8 hidden md:block">
              <p className="text-white font-serif italic text-xl">
                "Form follows function, but beauty is mandatory."
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section
        dark
        title="Selected Masterpieces"
        subtitle="Our Portfolio"
        containerClassName="max-w-[1400px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden cursor-pointer"
            >
              <div className="aspect-[16/9] overflow-hidden bg-gray-800">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-2 block">
                  {project.category} — {project.location}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm max-w-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/portfolio">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-12">
              View All Projects
            </Button>
          </Link>
        </div>
      </Section>

      {/* House Plans Store Preview */}
      <Section
        title="Ready-Made House Plans"
        subtitle="Store Highlights"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOUSE_PLANS.map((plan) => (
            <div key={plan.id} className="group border border-gray-100 flex flex-col">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={plan.imageUrl}
                  alt={plan.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 text-xs font-bold tracking-widest shadow-lg">
                  R {plan.price.toLocaleString()}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                <div className="flex items-center gap-6 text-gray-500 mb-6">
                  <div className="flex items-center gap-1.5">
                    <Bed size={16} className="text-blue-600" />
                    <span className="text-xs font-bold">{plan.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bath size={16} className="text-blue-600" />
                    <span className="text-xs font-bold">{plan.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Ruler size={16} className="text-blue-600" />
                    <span className="text-xs font-bold">{plan.area}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-8 line-clamp-2 leading-relaxed">
                  {plan.description}
                </p>
                <div className="mt-auto">
                  <Button variant="outline" className="w-full text-xs">
                    View Plan Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Custom Services CTA */}
      <section className="bg-blue-600 py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-blue-700 skew-x-[-20deg] translate-x-1/2 opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
            Need a Custom Design?
          </h2>
          <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
            Work directly with our lead architect to design a home that is perfectly tailored to your lifestyle, site, and vision.
          </p>
          <Link to="/services">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-12">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <Section
        title="Client Voices"
        subtitle="Testimonials"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-gray-50 p-10 relative">
              <span className="text-8xl text-blue-200 absolute top-4 left-6 pointer-events-none font-serif">“</span>
              <div className="relative z-10">
                <p className="text-lg text-gray-700 italic mb-8 leading-relaxed">
                  {t.content}
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.avatarUrl} alt={t.name} className="w-12 h-12 rounded-full grayscale" />
                  <div>
                    <h4 className="font-bold text-sm tracking-widest uppercase">{t.name}</h4>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{t.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
