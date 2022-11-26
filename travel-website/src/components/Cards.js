import React from 'react'
import CardItems from './CardItems'

import image2 from '../Assets/images/img-2.jpg'
import image3 from '../Assets/images/img-3.jpg'
import image4 from '../Assets/images/img-4.jpg'
import image8 from '../Assets/images/img-8.jpg'
import image9 from '../Assets/images/img-9.jpg'

import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destination!</h1>

        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItems
                        src={image9}
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/services'
                    />

                    <CardItems
                        src={image2}
                        text='Travel through the Islands of Bali in a Private Cruise'
                        label='Luxury'
                        path='/services'
                    />
                </ul>

                <ul className="cards__items">
                    <CardItems
                        src={image3}
                        text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                        label='Mystery'
                        path='/services'
                    />
                    <CardItems
                        src={image4}
                        text='Experience Football on Top of the Himilayan Mountains'
                        label='Adventure'
                        path='/products'
                    />
                    <CardItems
                        src={image8}
                        text='Ride through the Sahara Desert on a guided camel tour'
                        label='Adrenaline'
                        path='/sign-up'
                    />
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Cards
