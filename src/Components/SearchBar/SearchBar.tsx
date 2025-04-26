import React from "react";
import { useState } from "react";
import styles from './SearchBar.module.css';

interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}
const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {

    const [categories, setCategories] = useState <string []> ([]);
    const [keywords] = useState ([]);

    return (
        <div className={styles.main}>
            <div className={styles.searchBar}>
                <input
                    type="text"
                    placeholder="Szukaj..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className={styles.filters}>
                <select>
                    <option>Popularność</option>
                    <option>Cena</option>
                    <option>Pojemność</option>
                </select>
                <select>
                    <option>Pokaż wszystkie</option>
                    <option>Drzwi AddWash</option>
                    <option>Panel AI Control</option>
                    <option>Silnik inwerterowy</option>
                    <option>Wyświetlacz elektroniczny</option>
                </select>
                <select>
                    <option>Pokaż wszystkie</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                    <option>E</option>
                    <option>F</option>
                </select>
                <select>
                    <option>Pokaż wszystkie</option>
                    <option>9kg</option>
                    <option>8kg</option>
                    <option>10.5kg</option>
                </select>
            </div>
        </div>
    )
}

export default SearchBar;