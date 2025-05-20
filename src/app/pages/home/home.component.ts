import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  currentSlide = 0;
  slides = [0, 1, 2];
  
  featuredVehicles = [
    {
      model: 'Chevrolet Onix Premier 1.0',
      price: 72900,
      mileage: 18500,
      year: 2022,
      fuelType: 'Flex',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      highlight: 'Mais vendido'
    },
    {
      model: 'Volkswagen T-Cross Highline',
      price: 112900,
      mileage: 12400,
      year: 2021,
      fuelType: 'Flex',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      highlight: 'Semi-novo'
    },
    {
      model: 'Ford Ranger XLT 3.2 Diesel',
      price: 189900,
      mileage: 35600,
      year: 2020,
      fuelType: 'Diesel',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      highlight: 'Promoção'
    },
    {
      model: 'Fiat Argo Drive 1.3',
      price: 58900,
      mileage: 28700,
      year: 2019,
      fuelType: 'Flex',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}