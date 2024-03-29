import React from 'react';
import styles from "./Navbar.module.css";

const Navbar = ({logoutHandler}) => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                Nekogram
            </div>
            <div className={styles.logout} onClick={logoutHandler}>
                Logout
            </div>
        </div>
    );
};

export default Navbar;