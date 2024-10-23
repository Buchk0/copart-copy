import React from 'react';
import styles from './Card.module.scss'
import { Link } from 'react-router-dom';

interface Odometer {
  value: number;
  unit: string;
  status: string;
}

interface Car {
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

const CarCard: React.FC<{ car: Car }> = ({ car }) => {
  return (
    <div className={styles.card}>
    <Link to={`/car/${car.lot_number}`} state={{ car }}>
      <img src={car.imgUrl} alt="Car" className={styles.card__img}/>
      </Link>
      <div className={styles.card__info}>
      <p className={styles.card__text}>{car.name}</p>
      <p className={styles.card__text}>Lot# <b className={styles.text__lot}>{car.lot_number}</b></p>
      <p className={styles.card__price}>Current Bid: <b className={styles.text__price}>${car.price}</b></p>
      </div>
      <div className={styles.card__bottom}>
    <Link to={`/car/${car.lot_number}`} state={{ car }}>
        <button className={styles.card__button}>View Details</button>
    </Link>
      </div>
    </div>
  );
};

export default CarCard;



