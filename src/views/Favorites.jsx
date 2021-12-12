import React from 'react'
import NavBar from '../components/NavBar'
import { useContext } from 'react'
import { CharactersContext } from "../components/Context"
import Card from '../components/Card'
import styles from "./Home.module.css"


export default function Favorites() {
    
    const {favorites}=useContext(CharactersContext)

    return (
        <div>
            <NavBar/>
            {favorites.length?
            <div className={styles.cardsContainer}>
                {favorites.map(fav=>
                <Card
                key={fav.id}
                id={fav.id}
                name={fav.name}
                image={fav.image}
                status={fav.status}
                species={fav.species}
                numOfEpisodes={fav.episode.length}
                isFav={true}
                />)}
            </div>
            : 
            <h2 style={{marginTop:"2rem",fontFamily:"var(--fontprimary)"}}>
                Your characters list is empty 😥
            </h2>}
        </div>
    )
}
