import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../components/ProductFilters';
import { useGoogleSheets } from '../hooks/useGoogleSheets';
import { RefreshCw, AlertCircle } from 'lucide-react';

interface FilterState {
  category: string;
}

const StorePage: React.FC = () => {
  const { products, loading, error } = useGoogleSheets();
  const [filters, setFilters] = useState<FilterState>({
    category: 'Kõik'
  });
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category filter
      if (filters.category !== 'Kõik' && product.category !== filters.category) {
        return false;
      }

      return true;
    });
  }, [products, filters]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      category: 'Kõik'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-vintage-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin text-vintage-500 mx-auto mb-4" />
          <p className="text-vintage-600">Toodete laadimine...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-vintage-50">
      {/* Hero Section */}
      <div className="bg-vintage-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
            Meie Kollektsioon
          </h1>
          <p className="text-xl text-vintage-200 max-w-3xl mx-auto">
            Avasta ilusasti restaureeritud vintage mööblit, millest igaühel on oma ainulaadne 
            iseloom ja ajalugu. Elegantsest klassikalisest lauast kuni modernistlike toolideni.
          </p>
        </div>
      </div>

      {/* Store Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Error Message */}
        {error && (
          <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
            <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
            <div className="flex-1">
              <p className="text-red-700">Viga andmete laadimisel: {error}</p>
              <p className="text-red-600 text-sm mt-1">Kasutame kohalikke andmeid.</p>
            </div>
          </div>
        )}

        {/* Filters */}
        <ProductFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
          isOpen={filtersOpen}
          onToggle={() => setFiltersOpen(!filtersOpen)}
        />

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-vintage-600">
            Näitan {filteredProducts.length} toodet {products.length}-st
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-serif font-bold text-vintage-700 mb-4">
                Tooteid ei leitud
              </h3>
              <p className="text-vintage-600 mb-8">
                Me ei leidnud ühtegi mööblit, mis vastaks teie praegustele filtritele. 
                Proovige muuta otsingukriteeriume.
              </p>
              <button
                onClick={handleClearFilters}
                className="px-6 py-3 bg-vintage-500 text-white font-semibold rounded-lg hover:bg-vintage-600 transition-colors duration-300"
              >
                Eemalda kõik filtrid
              </button>
            </div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-vintage-700 mb-4">
              Ei leia seda, mida otsite?
            </h3>
            <p className="text-vintage-600 mb-6">
              Me hangime pidevalt uusi esemeid ja pakume kohandatud restaureerimise teenuseid. 
              Võtke meiega ühendust, et arutada oma konkreetseid vajadusi.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-forest-500 text-white font-semibold rounded-lg hover:bg-forest-600 transition-all duration-300 transform hover:scale-105"
            >
              Võta ühendust
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorePage;