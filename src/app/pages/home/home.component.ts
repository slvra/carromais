import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  currentSlide = 0;
  slides = [0, 1, 2];
  
  featuredVehicles = [
    {
      model: 'Ford Bronco Sport',
      price: 260000,
      mileage: 18500,
      year: 2022,
      fuelType: 'Flex',
      image: '/api/img/broncoSport.png',
      highlight: 'Mais vendido'
    },
    {
      model: 'Ford Mustang GT 5.0 V8',
      price: 552900,
      mileage: 12400,
      year: 2021,
      fuelType: 'Flex',
      image: '/api/img/mustang.png',
      highlight: 'Semi-novo'
    },
    {
      model: 'Ford Ranger XLT 3.2 Diesel',
      price: 230000,
      mileage: 35600,
      year: 2020,
      fuelType: 'Diesel',
      image: '/api/img/ranger.png',
      highlight: 'Promoção'
    },
    {
      model: 'Ford Territory 1.5 Turbo',
      price: 158900,
      mileage: 28700,
      year: 2019,
      fuelType: 'Flex',
      image: '/api/img/territory.png'
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