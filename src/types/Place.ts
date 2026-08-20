export interface Place {
  id: string;
  name: string;
  description: string;
  image: string;

  categories: string[];

  latitude: number;
  longitude: number;

  address: string;
}