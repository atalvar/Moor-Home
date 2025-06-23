import { useState, useEffect } from 'react';
import { Product } from '../types';

const GOOGLE_SHEETS_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSaZg1vQgH4X-ZOUMgIOP2FJQYo5qOk45-sqJvS9bPqKWc__CdgEJAf97ggFYRhgsDhvlCkqnxq0NlA/pub?output=csv';

export const useGoogleSheets = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const parseCSV = (csvText: string): Product[] => {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',').map(header => header.trim().replace(/"/g, ''));
    
    return lines.slice(1)
      .filter(line => line.trim())
      .map((line, index) => {
        const values = line.split(',').map(value => value.trim().replace(/"/g, ''));
        const product: any = {};

        headers.forEach((header, i) => {
          const value = values[i] || '';

          switch (header.toLowerCase()) {
            case 'id':
              product.id = value || `product-${index + 1}`;
              break;
            case 'name':
            case 'nimi':
              product.name = value;
              break;
            case 'description':
            case 'kirjeldus':
              product.description = value;
              break;
            case 'price':
            case 'hind':
              product.price = parseFloat(value) || 0;
              break;
            case 'image':
            case 'pilt':
              product.image = value;
              break;
            case 'category':
            case 'kategooria':
              product.category = value;
              break;
          }
        });

        return product as Product;
      })
      .filter(product => product.name && product.price);
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!GOOGLE_SHEETS_URL || GOOGLE_SHEETS_URL.trim() === '') {
        throw new Error('Google Sheets URL puudub');
      }

      const response = await fetch(GOOGLE_SHEETS_URL);
      if (!response.ok) {
        throw new Error('Google Sheets andmete laadimine ebaõnnestus');
      }

      const csvText = await response.text();
      const parsedProducts = parseCSV(csvText);
      setProducts(parsedProducts);
    } catch (err) {
      console.error('Error fetching Google Sheets data:', err);
      setError(err instanceof Error ? err.message : 'Tundmatu viga');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error, refetch: fetchProducts };
};
