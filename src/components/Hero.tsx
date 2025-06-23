import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://scontent.ftll3-1.fna.fbcdn.net/v/t51.75761-15/491453186_18003288335759992_862053763277585163_n.jpg?stp=dst-jpegr_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rDQQLXg4YBAQ7kNvwEeTg-F&_nc_oc=Adn3f3N1hw4TIAy6XTPw0iQv1kJBBjiFht8BSWhedo8VMRn4i4jg3Oq9l-mVTDeJI-nEV82c4LikeYtxapnCX1VT&_nc_zt=23&se=-1&_nc_ht=scontent.ftll3-1.fna&_nc_gid=N8GYW6L3VT11jHja-UAXcQ&oh=00_AfNhW2eNVUn2wjEstwZK5jDtkm6pHIUHwcSbCTkE-GJ12w&oe=685DE17F)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
          Giving Old Pieces
          <span className="block text-vintage-300">New Life</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-vintage-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover the beauty of vintage furniture, meticulously restored to its original grandeur. 
          Each piece tells a story of timeless craftsmanship.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/store"
            className="inline-flex items-center px-8 py-4 bg-vintage-500 text-white font-semibold rounded-lg hover:bg-vintage-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Collection
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          
          <a
            href="#about"
            className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-vintage-700 transition-all duration-300"
          >
            Learn Our Story
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;