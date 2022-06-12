import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
        <h1>Regardez ces destinations FANTASTIQUES !</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src="images/img-9.jpg"
                    text="Explorez la cascade cachée au coeur de la Jungle Amazonienne"
                    label='Aventure'
                    path='/services'
                    />
                    <CardItem 
                    src="images/img-2.jpg"
                    text="Naviguez à travers les îles de Bali sur votre bateau privé"
                    label='Luxe'
                    path='/services'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src="images/img-3.jpg"
                    text="Prenez le large sur l'Océan Atlantique vers des eaux inexplorées"
                    label='Mystère'
                    path='/services'
                    />
                    <CardItem 
                    src="images/img-4.jpg"
                    text="Jouez au Football dans des endroits originaux"
                    label='Aventure'
                    path='/products'
                    />
                    <CardItem 
                    src="images/img-8.jpg"
                    text="Traversez le désert du Sahara à dos de dromadaires"
                    label='Adrénaline'
                    path='/sign-up'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
