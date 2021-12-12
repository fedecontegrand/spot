import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';

export const CharactersContext = React.createContext()

const CharactersProvider = ({ children }) => {
  
    const [characters, setCharacters] = useState(null);

    const [favorites,setFavorites]=useState([])

    const [limitPage,setLimitPage]=useState(null)

    const getCharacters=(name= "",page)=>{

      setCharacters(null)
      let finalPage

      page%2===0 ? finalPage=(page/2) : finalPage=(page/2)+0.5

      fetch(`https://rickandmortyapi.com/api/character?page=${finalPage}&name=${name}`)

      .then(response=>
      response.json()
      .then(data=>{
          if(!data.error){
            setLimitPage(data.info.pages)
            let isPar=page%2===0
            let half
            isPar ? half=data.results.slice(10,data.results.length) : half= data.results.slice(0,data.results[9] ? 10 : data.results.length)
            console.log(half)
            setCharacters(half)
          }
          else setCharacters({error:data.error})
      })
      )
      .catch(err=>console.log(err))
    }

    const addFavorite=(id)=>{
      let selected=characters.find(char=>char.id===id)
      localStorage.removeItem("favorites")
      localStorage.setItem("favorites",JSON.stringify([...favorites,selected]))
      setFavorites(favorites=>[...favorites,selected])
    }

    const removeFavorite=(id)=>{
      let newFavorites=favorites.filter(char=>char.id!==id)
      localStorage.removeItem("favorites")
      localStorage.setItem("favorites",JSON.stringify(newFavorites))
      setFavorites(newFavorites)
    }

    useEffect(()=>{
      let storedFavorites=localStorage.getItem("favorites")
      if(storedFavorites!==null){
        setFavorites(JSON.parse(storedFavorites))
      }
    },[])


    return (
      <CharactersContext.Provider value={{characters, getCharacters, addFavorite,favorites,removeFavorite,limitPage} }>
        {children}
      </CharactersContext.Provider>
    );
  };
  
  export default CharactersProvider;

