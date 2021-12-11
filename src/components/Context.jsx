import React, { useState } from 'react'

export const CharactersContext = React.createContext()

const CharactersProvider = ({ children }) => {
  
    const [characters, setCharacters] = useState([]);

    const [favorites,setFavorites]=useState([])

    const getCharacters=(name= "")=>{

      fetch(`https://rickandmortyapi.com/api/character?name=${name}`)

      .then(response=>
      response.json()
      .then(data=>
          setCharacters(data.results))
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

