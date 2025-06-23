import React from 'react';
import { Leaf, Hammer, Gem, Shield } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Leaf,
      title: 'Sustainable Choice',
      description: 'Restore instead of replace. Each restored piece prevents furniture from ending up in landfills while reducing the demand for new materials.',
      color: 'forest'
    },
    {
      icon: Hammer,
      title: 'Superior Craftsmanship',
      description: 'Vintage furniture was built to last with solid wood construction and traditional joinery techniques rarely found in modern pieces.',
      color: 'vintage'
    },
    {
      icon: Gem,
      title: 'One-of-a-Kind Pieces',
      description: 'Own something truly unique. Each vintage piece has its own character and history that mass-produced furniture simply cannot replicate.',
      color: 'vintage'
    },
    {
      icon: Shield,
      title: 'Investment Value',
      description: 'Quality restored furniture often appreciates in value over time, making it both a beautiful and financially sound investment.',
      color: 'forest'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-vintage-700 mb-4">
            Why Choose Restored Furniture?
          </h2>
          <p className="text-lg text-vintage-600 max-w-3xl mx-auto">
            Discover the advantages of choosing beautifully restored vintage pieces 
            for your home and lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const colorClass = benefit.color === 'forest' ? 'forest' : 'vintage';
            
            return (
              <div 
                key={index} 
                className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-${colorClass}-500 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-vintage-700 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-vintage-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;