import React from 'react'
import styles from "./Search.module.css"

export default function Search() {
    return (
        <div className={styles.divContainer}>
            <input type="text" />
            <button>
                <img 
                src="http://assets.stickpng.com/images/59cfc4d2d3b1936210a5ddc7.png"
                alt="lupa"
                 />
            </button>
        </div>
    )
}
