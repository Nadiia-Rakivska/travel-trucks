export interface GalleryItem {
  thumb: string;
  original: string;
}

export interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export type CamperForm = 'alcove' | 'van' | 'fully-integrated';

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;

  form: CamperForm;

  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;

  transmission: 'automatic' | 'manual';
  engine: 'diesel' | 'petrol';

  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;

  gallery: GalleryItem[];
  reviews: Review[];
}

export interface CampersResponse {
  total: number;
  items: Camper[];
}