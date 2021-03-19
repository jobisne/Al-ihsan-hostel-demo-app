import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>AL-IHSAN ACADEMIC HOSTELS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              src='images/img-6.jpg'
              text='DARUL SIDEEQ HOSTEL (OLOHUNDA ABA)'
              label='View more'
              path='/sideeq'
            />
            <CardItem
              src='images/img-5.jpg'
              text='DARUL RIFAS HOSTEL (OLOHUNDA ABA)'
              label='View more'
              path='/sideeq'
            />
            <CardItem
              src='images/img-1.jpg'
              text='DARUL FARUUQ HOSTEL (OLOHUNDA ABA)'
              label='View more'
              path='/sideeq'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-4.jpg'
              text='DARUL KHALID HOSTEL (OLOHUNDA ABA)'
              label='Mystery'
              path='/sideeq'
            />
            <CardItem
              src='images/img-2.jpg'
              text='DARUL IMAAN HOSTEL (OLOHUNDA ABA)'
              label='Adventure'
              path='/sideeq'
            />
            <CardItem
              src='images/img-6.jpg'
              text='DARUL IMAAN HOSTEL (OLOHUNDA ABA)'
              label='Adrenaline'
              path='/sideeq'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
