import React, { useState } from 'react'
import styles from "./Search.module.css"
import lupa from "../../lupa1.png"
import { useContext } from 'react/cjs/react.development'
import { CharactersContext } from './Context'

export default function Search() {

    const {getCharacters}=useContext(CharactersContext)
    
    const [search,setSearch]=useState("")


    const handleChange=e=>{
        setSearch(e.target.value)
    }

    const handleClick=e=>{
        e.preventDefault()
        getCharacters(search)
        setSearch("")
    }

    return (
        <div className={styles.divContainer}>
            <form onSubmit={handleClick}>
            <input type="text" value={search} placeholder='Search your character..' onChange={handleChange}/>
            <button type="submit">
                <img 
                src={lupa}
                alt="lupa"
                 />
            </button>
            </form>
        </div>
    )
}
