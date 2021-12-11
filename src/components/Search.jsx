import React, { useState } from 'react'
import styles from "./Search.module.css"
import lupa from "../../lupa1.png"
import { useContext } from 'react/cjs/react.development'
import { CharactersContext } from './Context'

export default function Search({handleSearchChange}) {
   
    const [input,setInput]=useState("")


    const handleChange=e=>{
        setInput(e.target.value)
    }

    const handleClick=e=>{
        e.preventDefault()
        handleSearchChange(input)
        setInput("")
    }

    return (
        <div className={styles.divContainer}>
            <form onSubmit={handleClick}>
            <input type="text" placeholder='Search your character..' onChange={handleChange} value={input}/>
            <button type="submit" className={styles.button}>
                <img 
                src={lupa}
                alt="lupa"
                 />
            </button>
            </form>
        </div>
    )
}
