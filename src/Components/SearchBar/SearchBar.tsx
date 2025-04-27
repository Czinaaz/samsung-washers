import styles from './SearchBar.module.css';

interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}



const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {



    return (
        <div className={styles.main}>
            <div className={styles.searchBar}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

        </div>
    )
}

export default SearchBar;