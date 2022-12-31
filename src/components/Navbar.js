import React from 'react';
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                Nekogram
            </div>
            <div className={styles.logout}>
                Logout
            </div>
        </div>
    );
};

export default Navbar;