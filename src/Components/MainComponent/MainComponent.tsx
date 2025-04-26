import React from "react";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import WasherCard from "../WasherCard/WasherCard";
import washersData from "../../data/washersData";
import styles from './MainComponent.module.css';

const MainComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [visibleCount, setVisibleCount] = useState(6);

    const filteredWashers = washersData.filter(washer =>
        washer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const visibleWashers = filteredWashers.slice(0, visibleCount);
    return (
        <div className={styles.mainContainer}>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <div className={styles.washersList}>
            <p className={styles.results}>Liczba wyników: {filteredWashers.length}</p>
            <div className={styles.washerCard}>
                {visibleWashers.map((washer) => (
                    <WasherCard key={washer.id} washer={washer} />
                ))}
            </div>
            {visibleCount < filteredWashers.length && (
                <button onClick={() => setVisibleCount(prev => prev + 6)}>Load more</button>
            )}

            {visibleCount > 6 && (
                <button onClick={() => setVisibleCount(6)}>Show less</button>
            )}
        </div>
        </div>

    )
}

export default MainComponent;