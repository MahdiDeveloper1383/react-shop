export interface IBook {
  id: string;
  name: string;
  athour: string[] | string;
  price: number;
  cover: string;
  genere: string[];
  language: string[];
  stock: number;
  publisher: string;
  publication_year: string | number;
  page_count: number;
  description: string;
  isfavorite: boolean;
  weight: number;
  type: string[];
  rating:number
  volumes: number;
  }
  