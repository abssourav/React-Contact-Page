import React from 'react'

import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className='container'>
        <div className={`${styles.logo}`}>
            <img src="../public/images/Frame 2 1.png" alt="logo" />
        </div>
        <ul>
            <li src="#">Home</li>
            <li src="#">About</li>
            <li src="#">Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation