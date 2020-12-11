import React, { useState, useEffect } from 'react';
import { Search } from 'semantic-ui-react';
import PokemonCollection from './PokemonCollection';

export default function PokemonIndex() {
    const [pokemonCollection, setPokemonCollections] = useState([]);
    const [search, setSearch] = useState('');

    // function that handles setting search value
    const handleSearch = (e) => {
        setSearch(e.target.value)
    };

    // filter data when we search for a pokemon
    const desiredPokemon = pokemonCollection.filter(pokemon =>
        pokemon.name.includes(search)
    );

    useEffect(() => {
        fetch('http://localhost:3000/pokemon')
            .then(res => res.json())
            .then(pokemonCollection => setPokemonCollections(pokemonCollection))
            .catch(e => console.error(e))
    }, []);

    return (
        <div style={{ margin: 16 }}>
            <h1>Pokemon Searcher</h1>
            <div style={{ margin: 16 }}>
                <Search onSearchChange={handleSearch} />
            </div>
            <PokemonCollection pokemonCollection={desiredPokemon} showNoResults={false} />
        </div>
    );
};