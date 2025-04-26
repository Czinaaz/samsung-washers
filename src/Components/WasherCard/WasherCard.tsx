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
        <div>
            <ul className={styles.informationList}>
                <li><p>Pojemność (kg): <span>{washer.capacity}</span></p></li>
                <li><p>Wymiary (GxSxW): <span>55 x 60 x 85 cm</span></p></li>
                <li><p>Funkcje: <span>{washer.features.join(', ')}</span></p></li>
            </ul>


            <p>Klasa energetyczna <span>{washer.energyClass}</span></p>
            
            <div className={styles.priceSection}>
                <abbr className={styles.regs}>Cena obowiązuje: 15.09.2022 - 21.09.2022</abbr>
                <h6 className={styles.price}>{washer.price} zł</h6>
                <p className={styles.pays}>53,31 zł x 60 rat</p>
            </div>
            
        </div>

        <button 
            className={`${styles.chooseButton} ${selected ? styles.selected : ''}`} 
            onClick={handleClick}
        >
            {selected ? 'WYBRANE' : 'WYBIERZ'}
        </button>
    </div>
    )
}

export default WasherCard;