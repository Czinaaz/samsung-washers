import { useState } from "react";
import styles from './WasherCard.module.css';

interface Washer {
    id: number;
    name: string;
    capacity: string;
    features: string[];
    energyClass: string;
    price: number;
    popularity: number;
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

            <div  className={styles.energySection}>
                Klasa energetyczna 
                <div className={styles.energyBadge} >
                    {washer.energyClass}
                </div>
            </div>
            
            <div className={styles.priceSection}>
                <span className={styles.regs}>Cena obowiązuje: 15.09.2022 - 21.09.2022</span>
                <div className={styles.price}>
                    {washer.price} 
                    <div className={styles.priceDetails}>
                        <span className={styles.detailsTop}>00</span>
                        <span className={styles.detailsBottom}>zł</span>
                    </div>
                </div>
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