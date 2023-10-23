import { useState } from 'react';
import PokemonList from '../PokemonList/PokemonList';
import Search from '../Search/Search'
import './Pokedex.css'
import PokemonDetails from '../PokemonDetials/PokemonDetails';
function Pokedex(){

   const [searchTerm, setSearchTerm] = useState('');
     return(
        <div className="pokedex-wrapper">
         
           <Search updateSearchterm = {setSearchTerm}/>
         
           { (!searchTerm) ? <PokemonList/> : <PokemonDetails key={searchTerm} pokemonName={searchTerm} />}
        </div>
     )
}
export default Pokedex;