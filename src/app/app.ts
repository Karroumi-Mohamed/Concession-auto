import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarCard } from './features/cars/components/car-card/car-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('concession-auto');
}
