import React, { useState } from 'react'

export const CharactersContext = React.createContext()

const CharactersProvider = ({ children }) => {
  
    const [characters, setCharacters] = useState([]);

    const [favorites,setFavorites]=useState([])

    const getCharacters=(name= "",page)=>{

      let finalPage

      page%2===0 ? finalPage=(page/2) : finalPage=(page/2)+0.5

      fetch(`https://rickandmortyapi.com/api/character?page=${finalPage}&name=${name}`)

      .then(response=>
      response.json()
      .then(data=>{
          let isPar=page%2===0
          let half
          isPar ? half=data.results.slice(10,data.results.length) : half= data.results.slice(0,data.results[9] ? 10 : data.results.length)
          console.log(half)
          setCharacters(half)
      })
      )
      .catch(err=>console.log(err))
    }

    const addFavorite=(id)=>{
      let selected=characters.find(char=>char.id===id)
      setFavorites(favorites=>[...favorites,selected])
    }

    const removeFavorite=(id)=>{
      let newFavorites=favorites.filter(char=>char.id!==id)
      setFavorites(newFavorites)
    }


    return (
      <CharactersContext.Provider value={{characters, getCharacters, addFavorite,favorites,removeFavorite} }>
        {children}
      </CharactersContext.Provider>
    );
  };
  
  export default CharactersProvider;

