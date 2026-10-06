// src/data/mock.ts
import { Bike } from "../components/Type"; 

export const bikesData: Bike[] = [
  {
    id: '1',
    name: 'Pinarello',
    price: 1800,
    type: 'Roadbike',
    image: require('../img/img1.png'), 
    description: 'Đây là xe đạp siêu xin chạy cực êmmmmm',
  },
  {
    id: '2',
    name: 'Pina Mountain',
    price: 1500,
    type: 'Mountain',
    image: require('../img/img1.png'),
    description: 'Đây là xe đạp siêu xin chạy cực êmmmmm',
  },
  {
    id: '3',
    name: 'Pina Bike',
    price: 350,
    originalPrice: 449,
    discount: '15% OFF',
    type: 'Roadbike',
    image: require('../img/img1.png'),
    description: 'Đây là xe đạp siêu xin chạy cực êmmmmm',
  }
];