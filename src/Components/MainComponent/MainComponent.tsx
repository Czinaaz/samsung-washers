import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SortSection from "../SearchBar/SortSection";
import WasherCard from "../WasherCard/WasherCard";
import washersData from "../../data/washersData";
import styles from './MainComponent.module.css';

const MainComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [selectedFeature, setSelectedFeature] = useState(''); 
    const [selectedEnergyClass, setSelectedEnergyClass] = useState(''); 
    const [selectedCapacity, setSelectedCapacity] = useState('');
    const [visibleCount, setVisibleCount] = useState(6);

    const filteredWashers = washersData.filter((washer) => {
        const matchesSearch = washer.name.toLowerCase().includes(searchTerm.toLocaleLowerCase());
        const matchesFeature = selectedFeature ? washer.features.includes(selectedFeature) : true;
        const matchesEnergyClass = selectedEnergyClass ? washer.energyClass === selectedEnergyClass : true;
        const matchesCapacity = selectedCapacity ? washer.capacity === selectedCapacity : true;
        return matchesSearch && matchesFeature && matchesEnergyClass && matchesCapacity;
    });

    const sortedWashers = [...filteredWashers].sort((a, b) => {
        if (sortOption === 'popularity') return a.popularity - b.popularity;
        if (sortOption === 'priceAsc') return a.price - b.price;
        if (sortOption === 'capacityAsc') return a.sortCapacity - b.sortCapacity;
        return a.name.localeCompare(b.name);
    });




    const visibleWashers = sortedWashers.slice(0, visibleCount);
    
    
    return (
        <div className={styles.mainContainer}>
            
            <div className={styles.header}>
                <SearchBar 
                    searchTerm={searchTerm} 
                    setSearchTerm={setSearchTerm} 
                />
                <SortSection
                    sortOption={sortOption}
                    setSortOption={setSortOption}
                    selectedFeature={selectedFeature}
                    setSelectedFeature={setSelectedFeature}
                    selectedEnergyClass={selectedEnergyClass}
                    setSelectedEnergyClass={setSelectedEnergyClass}
                    selectedCapacity={selectedCapacity}
                    setSelectedCapacity={setSelectedCapacity}
                />
                <p className={styles.results}>Liczba wyników: {filteredWashers.length}</p>
            </div>
            
            <div className={styles.washersList}>
                
                <div className={styles.washerCard}>
                    {visibleWashers.map((washer) => (
                        <WasherCard key={washer.id} washer={washer} />
                    ))}
                </div>
            </div>
            <div className={styles.buttonSection}>
                    {visibleCount < filteredWashers.length && (
                        <button className={styles.loadButton} onClick={() => setVisibleCount(prev => prev + 6)}>
                            Pokaż więcej &#x25BE;
                        </button>
                    )}

                    {visibleCount > 6 && (
                        <button className={styles.loadButton} onClick={() => setVisibleCount(6)}>
                            Pokaż mniej &#x25B4;
                        </button>
                    )}
            </div>
        </div>

    )
}

export default MainComponent;