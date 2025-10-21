import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return [
      {
        id: 1,
        name: 'Playstation 5',
        description: 'Um console de última geração para jogos',
        price: 3500,
        launchDate: new Date('2025-10-15'),
        available: true,
        onSale: true,
        discount: 0.20
      },
      {
        id: 2,
        name: 'Notebook Gamer',
        description: 'Leve e poderoso para suas tarefas',
        price: 5200,
        launchDate: new Date('2025-10-18'),
        available: false,
        onSale: false,
        discount: 0
      },
      {
        id: 3,
        name: 'Fone de ouvido Bluetooth',
        description: 'Som de alta qualidade',
        price: 450,
        launchDate: new Date('2025-10-06'),
        available: true,
        onSale: true,
        discount: 0.15
      }
    ];
  }
}

