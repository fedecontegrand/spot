import React, { useContext, useEffect } from 'react'
import Card from '../components/Card'
import {CharactersContext} from '../components/Context'
import NavBar from '../components/NavBar'
import Search from '../components/Search'
import styles from "./Home.module.css"

export default function Home() {

  const {characters,getCharacters,favorites}=useContext(CharactersContext)

  useEffect(()=>{
    getCharacters()
  },[])


  return (
      <div>
        <NavBar/>  
        <Search/>
       {characters ?
        <div className={styles.cardsContainer}>
          {characters.map(char=>
           <Card
           key={char.id}
           id={char.id}
           name={char.name}
           image={char.image}
           status={char.status}
           species={char.species}
           numOfEpisodes={char.episode.length}
           isFav={favorites.some(fav=>fav.id===char.id)}
           />)}
        </div>
        :null}
      </div>
  )
}
