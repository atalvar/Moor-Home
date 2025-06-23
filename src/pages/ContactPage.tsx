import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Täname teid sõnumi eest! Võtame teiega peagi ühendust.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-vintage-50">
      {/* Hero Section */}
      <div className="bg-vintage-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
            Võta Meiega Ühendust
          </h1>
          <p className="text-xl text-vintage-200 max-w-3xl mx-auto">
            Kas teil on küsimusi meie kollektsiooni kohta või vajate kohandatud restaureerimise teenust? 
            Oleme siin, et aidata teil leida ideaalne antiikne ese teie kodule.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-vintage-700 mb-8">
              Kontaktandmed
            </h2>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-vintage-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-vintage-700 mb-2">Aadress</h3>
                  <p className="text-vintage-600">
                    Käsitöö tänav 123<br />
                    Tallinn, 12345<br />
                    Eesti
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-forest-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-vintage-700 mb-2">Telefon</h3>
                  <p className="text-vintage-600">+372 123 4567</p>
                  <p className="text-vintage-500 text-sm">Esmaspäev - Reede: 9:00 - 18:00</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-vintage-300 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-vintage-700 mb-2">E-post</h3>
                  <p className="text-vintage-600">tere@moorhome.ee</p>
                  <p className="text-vintage-500 text-sm">Vastame 24 tunni jooksul</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-forest-300 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-vintage-700 mb-2">Lahtiolekuajad</h3>
                  <div className="text-vintage-600 space-y-1">
                    <p>Esmaspäev - Reede: 9:00 - 18:00</p>
                    <p>Laupäev: 10:00 - 17:00</p>
                    <p>Pühapäev: 12:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-vintage-700 mb-4">
                Külastage Meie Töökoda
              </h3>
              <p className="text-vintage-600 mb-4">
                Olete alati oodatud külastama meie töökoda, et näha restaureerimisprotsessi 
                omal silmil ja tutvuda meie praeguse kollektsiooniga. Soovitame eelnevalt 
                helistada, et tagada meie olemasolu.
              </p>
              <p className="text-vintage-600">
                Pakume ka tasuta konsultatsioone teie antiikse mööbli restaureerimise 
                vajaduste kohta.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-vintage-700 mb-8">
              Saatke Meile Sõnum
            </h2>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-vintage-700 mb-2">
                    Nimi *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-vintage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vintage-500 focus:border-transparent"
                    placeholder="Teie nimi"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-vintage-700 mb-2">
                    E-post *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-vintage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vintage-500 focus:border-transparent"
                    placeholder="teie@email.ee"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-vintage-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-vintage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vintage-500 focus:border-transparent"
                    placeholder="+372 123 4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-vintage-700 mb-2">
                    Teema *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-vintage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vintage-500 focus:border-transparent"
                  >
                    <option value="">Valige teema</option>
                    <option value="general">Üldine päring</option>
                    <option value="restoration">Restaureerimise teenus</option>
                    <option value="purchase">Ostu päring</option>
                    <option value="custom">Kohandatud tellimus</option>
                    <option value="visit">Töökoja külastus</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-vintage-700 mb-2">
                  Sõnum *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-vintage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vintage-500 focus:border-transparent resize-vertical"
                  placeholder="Kirjutage oma sõnum siia..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-vintage-500 text-white font-semibold rounded-lg hover:bg-vintage-600 transition-all duration-300 transform hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Saada Sõnum
              </button>

              <p className="text-vintage-500 text-sm text-center mt-4">
                * Kohustuslikud väljad. Teie andmeid kasutatakse ainult teie päringule vastamiseks.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;