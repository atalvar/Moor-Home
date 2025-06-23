import React from 'react';
import { Filter, X } from 'lucide-react';

interface FilterState {
  category: string;
  priceRange: string;
}

interface ProductFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClearFilters: () => void;
  isOpen: boolean;
  onToggle: () => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onFilterChange,
  onClearFilters,
  isOpen,
  onToggle
}) => {

  //Filtreerimine kategooriad vaja lisada
  const categories = ['Kõik', 'Toolid', 'Lauad', 'Kirjutuslauad', 'Hoiustamine', 'Tualettlauad', 'Söögitoa komplektid'];
  const priceRanges = ['Kõik', 'Alla €500', '€500-€1000', '€1000-€2000', 'Üle €2000'];

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    onFilterChange({
      ...filters,
      [key]: value
    });
  };

  const hasActiveFilters = filters.category !== 'Kõik' || filters.priceRange !== 'Kõik';

  return (
    <div className="bg-white rounded-lg shadow-lg mb-8">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden p-4 border-b border-vintage-200">
        <button
          onClick={onToggle}
          className="flex items-center justify-between w-full text-vintage-700 font-medium"
        >
          <span className="flex items-center">
            <Filter className="w-5 h-5 mr-2" />
            Filtrid
            {hasActiveFilters && (
              <span className="ml-2 bg-vintage-500 text-white text-xs px-2 py-1 rounded-full">
                Aktiivne
              </span>
            )}
          </span>
          {isOpen ? <X className="w-5 h-5" /> : <Filter className="w-5 h-5" />}
        </button>
      </div>

      {/* Filters Content */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block p-6`}>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Category Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-vintage-700 mb-2">
              Kategooria
            </label>
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="w-full px-3 py-2 border border-vintage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vintage-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-vintage-700 mb-2">
              Hinnavahemik
            </label>
            <select
              value={filters.priceRange}
              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              className="w-full px-3 py-2 border border-vintage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vintage-500 focus:border-transparent"
            >
              {priceRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <div className="flex-shrink-0">
              <button
                onClick={onClearFilters}
                className="px-4 py-2 text-vintage-600 hover:text-vintage-800 font-medium transition-colors duration-200"
              >
                Eemalda kõik
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;