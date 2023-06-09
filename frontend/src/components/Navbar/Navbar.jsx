import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>Precize</div>
      <div className={styles.menu}>
              <NavLink to="/">View Data</NavLink>
        <NavLink to="/insert">Insert Data</NavLink>
         <NavLink to="/rank">Get Rank</NavLink>
              <NavLink to="/update">Update Data</NavLink>
              <NavLink to="/delete">Delete Data</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
