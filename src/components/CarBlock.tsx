import React from 'react'

import CarCard from './Card/CarCard'
import cars from '../assets/cars.json'

export interface Odometer {
  value: number;
  unit: string;
  status: string;
}

export interface Car {
  imgUrl: string;
  lot_number: number;
  vin: string;
  name: string;
  price: string;
  title_code: string;
  odometer: Odometer;
  primary_damage: string;
  cylinders: number;
  body_style: string;
  color: string;
  engine_type: string;
  transmission: string;
  drive: string;
  vehicle_type: string;
  fuel: string;
  keys: string;
  highlights: string;
}

const CarBlock: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className='block'>
      <h1 className="block__title">
        Popular Vehicles
      </h1>
      <div className="block__cards">
      {cars.map((car: Car, index: number) => (
          <div key={index}>
            <CarCard car={car} /> 
          </div>
        ))}
    </div>
    </div>
  );
}

export default CarBlock
