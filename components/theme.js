import React, { useState } from 'react';
import styles from '../styles/Sc.module.css';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';

const Themeic = () => {
  const [dark, setDark] = useState(true);

  function changeTheme() {
    setDark(!dark);
  }
  return (
    <label className={dark ? styles.dark : styles.light}>
      <input type='checkbox' className={styles.them} onClick={changeTheme} />
      {dark ? <BsFillSunFill  /> : <BsFillMoonStarsFill  />}
    </label>
  );
}

export default Themeic;
