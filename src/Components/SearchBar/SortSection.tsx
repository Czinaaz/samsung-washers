import React from "react";
import Select, {components} from 'react-select'
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

const customStyles = {
    control: (provided: any, state: any) => ({
        ...provided,
        borderRadius: 0,
        backgroundColor: '#fff',
        border: 'none',
        boxShadow: 'none',
        '&:hover': {
            borderColor: '#aaa',
        },
        cursor: 'pointer',
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#F3F3F3' : '#fff',
        color: '#000',
        cursor: 'pointer',
        borderRadius: 0,
        '&:active': {
            backgroundColor: '#fff',
        }
    }),
    menu: (provided: any) => ({
        ...provided,
        borderRadius: 0,
        marginTop: 10,
        padding: 'none',
    }),
    dropdownIndicator: (provided: any) => ({
        ...provided,
        padding: 4,
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
};

const sortOptions = [
    { value: "", label: "Pokaż wszystkie" },
    { value: "popularity", label: "Popularność" },
    { value: "priceAsc", label: "Cena" },
    { value: "capacityAsc", label: "Pojemność" },
];

const featureOptions = [
    { value: "", label: "Pokaż wszystkie" },
    { value: "Drzwi AddWash™", label: "Drzwi AddWash™" },
    { value: "Panel AI Control", label: "Panel AI Control" },
    { value: "Silnik inwerterowy", label: "Silnik inwerterowy" },
    { value: "Wyświetlacz elektroniczny", label: "Wyświetlacz elektroniczny" },
];

const energyClassOptions = [
    { value: "", label: "Pokaż wszystkie" },
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
    { value: "D", label: "D" },
    { value: "E", label: "E" },
    { value: "F", label: "F" },
];

const capacityOptions = [
    { value: "", label: "Pokaż wszystkie" },
    { value: "9", label: "9kg" },
    { value: "8", label: "8kg" },
    { value: "10,5", label: "10,5kg" },
];

const DropdownIndicator = (props: any) => {
    const { menuIsOpen } = props.selectProps;

    return (
        <components.DropdownIndicator {...props}>
            <span className={`${styles.triangle} ${menuIsOpen ? styles.triangleOpen : ''}`}>▼</span>
        </components.DropdownIndicator>
    );
};


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
                <Select
                    options={sortOptions}
                    value={sortOptions.find(opt => opt.value === sortOption)}
                    onChange={(selected) => setSortOption(selected?.value || "")}
                    className={styles.select}
                    classNamePrefix="customSelect"
                    components={{ DropdownIndicator }}
                    styles={customStyles}
                />
            </div>

            <div className={styles.filtersSection}>
                <h5>Funkcje:</h5>
                <Select
                    options={featureOptions}
                    value={featureOptions.find(opt => opt.value === selectedFeature)}
                    onChange={(selected) => setSelectedFeature(selected?.value || "")}
                    className={styles.select}
                    classNamePrefix="customSelect"
                    components={{ DropdownIndicator }}
                    styles={customStyles}
                />
            </div>

            <div className={styles.filtersSection}>
                <h5>Klasa energetyczna:</h5>
                <Select
                    options={energyClassOptions}
                    value={energyClassOptions.find(opt => opt.value === selectedEnergyClass)}
                    onChange={(selected) => setSelectedEnergyClass(selected?.value || "")}
                    className={styles.select}
                    classNamePrefix="customSelect"
                    components={{ DropdownIndicator }}
                    styles={customStyles}
                />
            </div>

            <div className={styles.filtersSection}>
                <h5>Pojemność:</h5>
                <Select
                    options={capacityOptions}
                    value={capacityOptions.find(opt => opt.value === selectedCapacity)}
                    onChange={(selected) => setSelectedCapacity(selected?.value || "")}
                    className={styles.select}
                    classNamePrefix="customSelect"
                    components={{ DropdownIndicator }}
                    styles={customStyles}
                />
            </div>
        </div>
    )
}


export default SortSection;