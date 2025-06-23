export interface Product {
  id: string;
  name: string;
  description: string;
  era: string;
  dimensions: string;
  price: number;
  image: string;
  category: string;
  beforeImage?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}