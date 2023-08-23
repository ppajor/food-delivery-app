export interface Restaurant {
  name: string;
  image: string;
  logo: string;
  deliveryTime: string;
  deliveryPrice: string;
  rating: string;
  ratingCount: string;
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
