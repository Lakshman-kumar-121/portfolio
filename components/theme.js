import React, { useContext, useState } from 'react';
import styles from '../styles/Sc.module.css';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { ThemeContext } from '@/pages';
import { changetheme, thememde } from './modecontext';


const Themeic = () => {
  const change = changetheme();
  const mode = thememde();
  return (
    <label className={mode ?  styles.light :styles.dark}>
      <input type='checkbox' className={styles.them} onClick={change} />
      {mode ?   <BsFillMoonStarsFill  />: <BsFillSunFill  />} 
    </label>
  );
}

export default Themeic;
