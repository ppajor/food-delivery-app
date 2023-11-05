export interface Restaurant {
  id_restaurant: number;
  name: string;
  image: string;
  logo: string;
  deliverytime: string;
  deliveryprice: string;
  rating: string;
  ratingcount: number;
  image_url: string;
  logo_url: string;
  category: string;
}

export interface RestaurantMenuCategory {
  name: string;
  id: number;
  items?: MenuCategoryItem[];
}

export interface MenuCategoryItem {
  id: number;
  name: string;
  price: number;
  currency: string;
  description: string;
}

export interface Location {
  coords: Coords;
  mocked: boolean;
  timestamp: number;
}

interface Coords {
  accuracy: number;
  altitude: number;
  altitudeAccuracy: number;
  heading: number;
  latitude: number;
  longitude: number;
  speed: number;
}

export type PaymentOption = 'creditCard' | 'blik' | 'onDelivery';
