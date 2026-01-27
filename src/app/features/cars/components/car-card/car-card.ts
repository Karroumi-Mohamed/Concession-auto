import { Component } from '@angular/core';
import { CarWithBrand } from '../../../../models';

@Component({
  selector: 'app-car-card',
  imports: [],
  templateUrl: './car-card.html',
})
export class CarCard {
  car: CarWithBrand = {
    id: 1,
    brand: {
      id: 1,
      name: 'Peugeot',
    },
    model: '3008',
    price: 280500,
    fuel: 'diesel',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400',
    available: true,
    listingDate: new Date('2023-01-15T10:00:00Z'),
  }

  formatPrice(): string {
    return this.car.price.toLocaleString('en-US') + ' MAD';
  }

  onViewDetails() {
    console.log('View Details for car:', this.car.id);
  }

  onEdit() {
    console.log('Edit car:', this.car.id);
  }

  onDelete() {
    console.log('Delete car:', this.car.id);
  }
}
