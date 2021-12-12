import React from 'react'
import styles from './Footer.module.css'

export default function Footer({page,handlePageChange,limitPage}) {
    return (
        <div style={{display:'flex',width:'100%',justifyContent:'center', columnGap:'1rem',alignItems:'center',padding:'1rem 0'}}>
            <button onClick={handlePageChange} name='prev' className={styles.footerButtons} disabled={page===1}>Prev</button>
            <span>{page}</span>
            <button onClick={handlePageChange} name='next' className={styles.footerButtons} disabled={page===limitPage}>Next</button>
        </div>
    )
}
