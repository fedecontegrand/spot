import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import Card from '../components/Card'
import {CharactersContext} from '../components/Context'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Search from '../components/Search'
import styles from "./Home.module.css"

export default function Home() {

  const {characters,getCharacters,favorites}=useContext(CharactersContext)

  const [page,setPage]=useState(1)

  const [search,setSearch]=useState("")


  useEffect(()=>{
    getCharacters(search,page)
  },[page,search])

  const handlePageChange=e=>{
    window.scrollTo({top:0,behavior:'smooth'})
    if (e.target.name==='next') setPage(page=>page+1)
    else setPage(page=>page-1)
  }

  const handleSearchChange=(input)=>{
    setPage(1)
    setSearch(input)
}


  return (
      <div>
        <NavBar/>  
        <Search handleSearchChange={handleSearchChange}/>
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
        <Footer page={page} handlePageChange={handlePageChange}/>
      </div>
  )
}
