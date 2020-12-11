import React, { useState, useEffect } from 'react';
import { Search } from 'semantic-ui-react';
import PokemonCollection from './PokemonCollection';

export default function PokemonIndex() {
    const [pokemonCollection, setPokemonCollections] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/pokemon')
        .then(res => res.json())
        .then(pokemonCollection => setPokemonCollections( pokemonCollection ))
        .catch(e => console.error(e))
    }, [])

    return (
        <div style={{margin: 16}}>
            <h1>Pokemon Searcher</h1>
            <div style={{margin: 16}}>
                <Search />
            </div>
            <PokemonCollection pokemonCollection={pokemonCollection} showNoResults={false}/>
        </div>
    )
};