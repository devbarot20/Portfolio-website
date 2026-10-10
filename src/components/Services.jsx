import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    title: 'UX Design',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description: 'Wireframing, User Research, and Journey Mapping to create intuitive and accessible user experiences that solve real problems.',
    color: '#9333ea',
  },
  {
    title: 'UI Design',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    description: 'Crafting High-fidelity mockups, Visual Identity, and Prototyping in Figma/Adobe to build stunning pixel-perfect interfaces.',
    color: '#10b981',
  },
  {
    title: 'Full Stack Dev',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    description: 'Building robust architectures with React, Node.js, and databases for performant, secure, and highly scalable web applications.',
    color: '#4f46e5',
  }
];

export default function Services() {
  const { ref: titleRef, inView: titleIn } = useScrollReveal();
  const { ref: cardsRef, inView: cardsIn } = useScrollReveal();

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden bg-[#050505] border-t-2 border-[#1e293b]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Heading */}
        <div ref={titleRef} className={`reveal ${titleIn ? 'in-view' : ''} mb-20 md:flex items-end justify-between`}>
          <div>
            <p className="section-label mb-4">MY APPROACH</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter">
              <span className="text-white">Services</span>
            </h2>
          </div>
          <p className="text-slate-400 mt-6 md:mt-0 max-w-sm text-[1rem] font-medium border-l-4 border-[#9333ea] pl-4">
            Bridging the gap between beautiful design and powerful engineering.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal ${cardsIn ? 'in-view' : ''} reveal-delay-${i + 1} p-8 bg-[#0f111a] border-2 border-[#1e293b] hover:-translate-y-2 transition-all duration-300 group`}
              style={{ boxShadow: '4px 4px 0px rgba(30,41,59,0.5)' }}
            >
              {/* Icon Container */}
              <div 
                className="w-16 h-16 mb-8 flex items-center justify-center border-2 bg-[#050505] transition-colors duration-300 group-hover:bg-opacity-20"
                style={{ borderColor: service.color, color: service.color }}
              >
                {service.icon}
              </div>
              
              <h3 className="font-black text-2xl text-white uppercase tracking-tight mb-4 transition-colors duration-300" style={{ color: 'white' }}>
                {service.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed font-medium">
                {service.description}
              </p>

              {/* Hover styling dynamic */}
              <style>{`
                .group:hover {
                  border-color: ${service.color};
                  box-shadow: 4px 4px 0px ${service.color} !important;
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
