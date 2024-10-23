import React from 'react'
import { useLocation } from 'react-router-dom'

const Car = () => {
const location = useLocation()
const car = location.state?.car

if (!car) {
  return <p>Error</p>
}

  return (
   <div className="car">
    <div className="car__img_container">
      <img src={car.imgUrl} alt="Car" className='car__img' />
    </div>
    <div className="car__info">
      <div className="car__lot">
        <h2 className="info__title">Lot Number:</h2>
        <h2 className="info__item">{car.lot_number}</h2>
      </div>
      <div className="car__lot">
        <h2 className="info__title">Lot Number:</h2>
        <h2 className="info__item">{car.lot_number}</h2>
      </div>
      <div className="car__lot">
        <h2 className="info__title">Lot Number:</h2>
        <h2 className="info__item">{car.lot_number}</h2>
      </div>
      <div className="car__lot">
        <h2 className="info__title">Lot Number:</h2>
        <h2 className="info__item">{car.lot_number}</h2>
      </div>
      <div className="car__lot">
        <h2 className="info__title">Lot Number:</h2>
        <h2 className="info__item">{car.lot_number}</h2>
      </div>
      <div className="car__lot">
        <h2 className="info__title">Lot Number:</h2>
        <h2 className="info__item">{car.lot_number}</h2>
      </div>
      <div className="car__lot">
        <h2 className="info__title">Lot Number:</h2>
        <h2 className="info__item">{car.lot_number}</h2>
      </div>
      <div className="car__lot">
        <h2 className="info__title">Lot Number:</h2>
        <h2 className="info__item">{car.lot_number}</h2>
      </div>
      <div className="car__lot">
        <h2 className="info__title">Lot Number:</h2>
        <h2 className="info__item">{car.lot_number}</h2>
      </div>
    </div>
    <div className="car__price"></div>
   </div>
  )
}

export default Car
