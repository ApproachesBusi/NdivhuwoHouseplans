import * as React from 'react';
import { Section, Button } from '../components/UI';
import { HOUSE_PLANS } from '../constants';
import { Ruler, Bed, Bath, ShoppingCart, Filter } from 'lucide-react';

export default function Store() {
  return (
    <div className="pt-20">
      <Section
        title="Ready-to-Build Plans"
        subtitle="The House Plans Store"
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 border-r border-gray-100 pr-8 hidden lg:block">
            <div className="sticky top-32">
              <h4 className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm mb-8">
                <Filter size={16} /> Filters
              </h4>
              
              <div className="space-y-8">
                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-widest mb-4">Price Range</label>
                  <div className="space-y-3">
                    {['Under R10k', 'R10k - R15k', 'R15k - R20k', 'Over R20k'].map(p => (
                      <label key={p} className="flex items-center gap-2 text-xs font-medium cursor-pointer hover:text-blue-600">
                        <input type="checkbox" className="w-3.5 h-3.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500" />
                        {p}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-widest mb-4">Bedrooms</label>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, '4+'].map(b => (
                      <button key={b} className="border border-gray-200 py-2 text-[10px] font-bold hover:border-blue-600 hover:text-blue-600 group active:bg-blue-50">
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {HOUSE_PLANS.map((plan) => (
                <div key={plan.id} className="flex flex-col group">
                  <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative mb-6">
                    <img
                      src={plan.imageUrl}
                      alt={plan.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-0 right-0 bg-blue-600 text-white font-bold text-xs tracking-widest px-4 py-2">
                      R {plan.price.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                      {plan.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-6 text-gray-500 mb-6 py-4 border-y border-gray-50">
                    <div className="flex items-center gap-1.5 grayscale opacity-70">
                      <Bed size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{plan.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center gap-1.5 grayscale opacity-70">
                      <Bath size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{plan.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center gap-1.5 grayscale opacity-70">
                      <Ruler size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{plan.area}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="flex gap-2">
                    <Button variant="primary" className="flex-1 text-[10px] py-4">
                      <ShoppingCart size={14} className="mr-2" /> Buy Now
                    </Button>
                    <Button variant="outline" className="flex-1 text-[10px] py-4">
                      Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
