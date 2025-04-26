import React from "react";
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header_main}>
            <header className={styles.header}>
                <p>
                    Wybierz urządzenie
                </p>
            </header>
        </div>
    );
}

export default Header;