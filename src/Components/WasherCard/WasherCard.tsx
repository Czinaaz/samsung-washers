import React from "react";
import { useState } from "react";
import styles from './WasherCard.module.css';

interface Washer {
    id: number;
    name: string;
    capacity: string;
    features: string[];
    energyClass: string;
    price: number;
    image: string;
}

interface WasherCardProps {
    washer: Washer;
}



const WasherCard = ({ washer }: WasherCardProps) => {

    const [selected, setSelected] = useState(false);
    const handleClick = () => {
        setSelected(prevSelected => !prevSelected);
    };
    
    return (
    <div className={styles.washerCard}>
        <img src={washer.image} alt={washer.name} />
        <h3>{washer.name}</h3>
        <p>Pojemność: {washer.capacity}</p>
        <p>Funkcje: {washer.features.join(', ')}</p>
        <p>Klasa energetyczna: {washer.energyClass}</p>
        <p className={styles.price}>{washer.price} zł</p>
        <button 
            className={`${styles.chooseButton} ${selected ? styles.selected : ''}`} 
            onClick={handleClick}
        >
            {selected ? 'Wybrane' : 'Wybierz'}
        </button>
    </div>
    )
}

export default WasherCard;