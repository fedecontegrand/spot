import React from 'react'
import styles from "./Card.module.css"
import star from "../../estrella.png"
import emptyStar from "../../estrellavacia.png"
import { useContext, useState } from 'react'
import { CharactersContext } from './Context'

export default function Card({name,status,species,image,numOfEpisodes,id,isFav}) {

    const {addFavorite,favorites,removeFavorite}=useContext(CharactersContext)


    return (
        <div className={styles.cardContainer}>
            <img src={image} alt="charimage"/>
            <div className={styles.content}>
            <h4>{name}</h4>
            <span>Status: {status}<div className={styles[status]}/></span>
            <span>Species: {species}</span>
            <span>Nº of appearances: {numOfEpisodes}</span>
            </div>
            <img 
            src={ isFav ? star : emptyStar} 
            alt="estr" 
            className={styles.fav} 
            onClick={(e)=> isFav ? removeFavorite(id) : addFavorite(id)}
            />
        </div>
    )
}
