import * as React from 'react';
import { Section, Button } from '../components/UI';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

export default function Portfolio() {
  const [filter, setFilter] = React.useState<string>('All');
  const categories = ['All', 'Modern', 'Luxury', 'Minimalist'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-20">
      <Section
        title="Architectural Excellence"
        subtitle="Our Portfolio"
      >
        {/* Filtering */}
        <div className="flex flex-wrap gap-4 mb-16 border-b border-gray-100 pb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs font-bold tracking-[0.2em] uppercase py-2 px-1 border-b-2 transition-all ${
                filter === cat ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden mb-6 bg-gray-100">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="block text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-2">
                      {project.category} — {project.year}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-blue-600 transition-colors uppercase">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 tracking-widest uppercase font-medium">
                      {project.location}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed max-w-lg mb-6">
                  {project.description}
                </p>
                <Button variant="ghost" className="justify-start p-0 h-auto hover:bg-transparent hover:text-blue-600 group-hover:pl-2 transition-all">
                  Read Case Study
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Section>

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to start your journey?</h2>
          <Button size="lg">Contact Our Studio</Button>
        </div>
      </section>
    </div>
  );
}
