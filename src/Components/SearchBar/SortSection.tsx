import React from "react";
import styles from './SearchBar.module.css';

interface SortParams {
    sortOption: string;
    setSortOption: (value: string) => void;
    selectedFeature: string;
    setSelectedFeature: (value: string) => void;
    selectedEnergyClass: string;
    setSelectedEnergyClass: (value: string) => void;
    selectedCapacity: string;
    setSelectedCapacity: (value: string) => void;
}



const SortSection: React.FC<SortParams> = ({
        sortOption,
        setSortOption,
        selectedFeature,
        setSelectedFeature,
        selectedEnergyClass,
        setSelectedEnergyClass,
        selectedCapacity,
        setSelectedCapacity,
        
    }) => {
        
    return (
        <div className={styles.filters}>
            <div className={styles.filtersSection}>
                <h5>Sortuj po:</h5>
                <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} >
                <option value="" >Pokaż wszystkie</option>
                    <option value="popularity" >Popularność</option>
                    <option value="priceAsc" >Cena</option>
                    <option value="priceDesc" >Pojemność</option>
                </select>
            </div>
            <div>
                <h5>Funkcje:</h5>
                <select value={selectedFeature} onChange={(e) => setSelectedFeature(e.target.value)} >
                    <option value="" >Pokaż wszystkie</option>
                    <option value="Drzwi AddWash™" >Drzwi AddWash™</option>
                    <option value="Panel AI Control" >Panel AI Control</option>
                    <option value="Silnik inwerterowy" >Silnik inwerterowy</option>
                    <option value="Wyświetlacz elektroniczny" >Wyświetlacz elektroniczny</option>
                </select>
            </div>
            <div>
                <h5>Klasa energetyczna:</h5>
                <select value={selectedEnergyClass} onChange={(e) => setSelectedEnergyClass(e.target.value)} >
                    <option value="" >Pokaż wszystkie</option>
                    <option value="A" >A</option>
                    <option value="B" >B</option>
                    <option value="C" >C</option>
                    <option value="D" >D</option>
                    <option value="E" >E</option>
                    <option value="F" >F</option>
                </select>
            </div>
            <div>
                <h5>Pojemność</h5>
                <select value={selectedCapacity} onChange={(e) => setSelectedCapacity(e.target.value)} >
                    <option value="" >Pokaż wszystkie</option>
                    <option value="9" >9kg</option>
                    <option value="8" >8kg</option>
                    <option value="10,5" >10,5kg</option>
                </select>
            </div>

        </div>
    )
}


export default SortSection;