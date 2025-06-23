import React from 'react';
import { Award, Clock, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-vintage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-vintage-700 mb-4">
            Moor Home'ist
          </h2>
          <p className="text-lg text-vintage-600 max-w-3xl mx-auto">
            Üle kolme aastakümne oleme olnud kirglikud antiikse mööbli kunstilisuse ja 
            käsitöö säilitamise suhtes, tuues ajatud esemed tagasi ellu kaasaegsetesse kodudesse.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/5824903/pexels-photo-5824903.jpeg"
              alt="Mööbli restaureerimise töökoda"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-vintage-500 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-vintage-700 mb-2">Meistrikäsitöö</h3>
                <p className="text-vintage-600">
                  Meie oskuslikud käsitöölised kasutavad traditsioonilisi tehnikaid koos kaasaegse 
                  ekspertteadmisega, et restaureerida iga ese oma algses ilus, tagades kestvuse.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-forest-500 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-vintage-700 mb-2">30+ Aastat Kogemust</h3>
                <p className="text-vintage-600">
                  Kolm aastakümmet ekspertteadmisi mööbli restaureerimisel, alates Viktoria 
                  ajastu meistriteostest kuni keskaja kaasaegse klassikani, iga ese saab meie jagamatu tähelepanu.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-vintage-300 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-vintage-700 mb-2">Kirglik Säilitamine</h3>
                <p className="text-vintage-600">
                  Iga restaureerimisprojekt on armastuse töö. Usume ajaloo säilitamisse 
                  ja pärandese esemete loomisse, mida hinnatakse põlvkondade kaupa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;