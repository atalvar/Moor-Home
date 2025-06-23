import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { galleryItems } from '../data/gallery';

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [showBefore, setShowBefore] = useState(true);

  const openModal = (index: number) => {
    setSelectedItem(index);
    setShowBefore(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const navigateModal = (direction: 'prev' | 'next') => {
    if (selectedItem === null) return;
    
    if (direction === 'prev') {
      setSelectedItem(selectedItem === 0 ? galleryItems.length - 1 : selectedItem - 1);
    } else {
      setSelectedItem(selectedItem === galleryItems.length - 1 ? 0 : selectedItem + 1);
    }
    setShowBefore(true);
  };

  return (
    <section className="py-20 bg-vintage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-vintage-700 mb-4">
            Restoration Gallery
          </h2>
          <p className="text-lg text-vintage-600 max-w-3xl mx-auto">
            Witness the transformation of forgotten treasures into stunning centerpieces. 
            Each restoration tells a story of renewal and craftsmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={item.afterImage}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/90 text-sm">Click to see before & after</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white text-2xl font-serif font-bold">
                  {galleryItems[selectedItem].title}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-vintage-300 transition-colors duration-200"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              {/* Before/After Toggle */}
              <div className="flex justify-center mb-4">
                <div className="bg-white/10 rounded-lg p-1 flex">
                  <button
                    onClick={() => setShowBefore(true)}
                    className={`px-4 py-2 rounded-md transition-all duration-200 ${
                      showBefore 
                        ? 'bg-vintage-500 text-white' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Before
                  </button>
                  <button
                    onClick={() => setShowBefore(false)}
                    className={`px-4 py-2 rounded-md transition-all duration-200 ${
                      !showBefore 
                        ? 'bg-vintage-500 text-white' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    After
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <img
                  src={showBefore ? galleryItems[selectedItem].beforeImage : galleryItems[selectedItem].afterImage}
                  alt={`${galleryItems[selectedItem].title} - ${showBefore ? 'Before' : 'After'}`}
                  className="w-full h-96 object-cover rounded-lg"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={() => navigateModal('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => navigateModal('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Description */}
              <p className="text-white/90 text-center mt-4 text-lg">
                {galleryItems[selectedItem].description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;