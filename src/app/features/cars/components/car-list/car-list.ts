import { Component } from '@angular/core';
import { CarCard } from '../car-card/car-card';
import { CommonModule } from '@angular/common';
import { CarWithBrand } from '../../../../models';

@Component({
  selector: 'app-car-list',
  imports: [CommonModule, CarCard],
  templateUrl: './car-list.html',
})
export class CarList {
  cars: CarWithBrand[] = [
    {
      id: 1,
      brand: { id: 1, name: 'Peugeot' },
      model: '3008',
      price: 280500,
      fuel: 'diesel',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400',
      available: true,
      listingDate: new Date('2023-01-21')
    },
    {
      id: 2,
      brand: { id: 1, name: 'Peugeot' },
      model: '208',
      price: 185000,
      fuel: 'gasoline',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400',
      available: true,
      listingDate: new Date('2023-03-15')
    },
    {
      id: 3,
      brand: { id: 2, name: 'Renault' },
      model: 'Clio',
      price: 165000,
      fuel: 'gasoline',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400',
      available: false,
      listingDate: new Date('2022-12-05')
    }
  ];

  isLoading = false;

  trackByCar(index: number, car: CarWithBrand): number {
    return car.id;
  }
}
