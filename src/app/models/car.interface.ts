export interface Car {
  id: number;
  brandId: number;
  model: string;
  price: number;
  fuel: 'gasoline' | 'diesel' | 'electric' | 'hybrid';
  image: string;
  available: boolean;
  listingDate: Date;
}

export interface Brand {
  id: number;
  name: string;
}

export interface CarWithBrand extends Omit<Car, 'brandId'> {
  brand: Brand;
}
