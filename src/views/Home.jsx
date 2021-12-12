import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import Card from '../components/Card'
import {CharactersContext} from '../components/Context'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Search from '../components/Search'
import Spinner from '../components/Spinner'
import styles from "./Home.module.css"

export default function Home() {

  const {characters,getCharacters,favorites,limitPage}=useContext(CharactersContext)
  const error=useContext(CharactersContext).characters?.error

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
        <div className={styles.cardsContainer}>
        {characters ?
          Array.isArray(characters) ? 
          <> 
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
            <Footer page={page} handlePageChange={handlePageChange} limitPage={limitPage}/>
          </>
          : <h2 style={{fontFamily:"var(--fontprimary)"}}>{error} 😥</h2>
          :<Spinner/>} 
          </div>
      </div>
  )
}
