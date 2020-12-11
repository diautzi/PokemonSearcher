import React, { useState, useEffect } from 'react';
import { Search } from 'semantic-ui-react';
import PokemonCollection from './PokemonCollection';
import PokemonForm from './PokemonForm';

export default function PokemonIndex() {
    const [pokemonCollection, setPokemonCollections] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/pokemon')
            .then(res => res.json())
            .then(pokemonCollection => setPokemonCollections(pokemonCollection))
            .catch(e => console.error(e))
    }, []);

    // function that handles setting search value
    const handleSearch = (e) => {
        setSearch(e.target.value)
    };

    // filter data when we search for a pokemon
    const desiredPokemon = pokemonCollection.filter(pokemon =>
        pokemon.name.includes(search)
    );

    const addPokemon = (pokemon) => {
        setPokemonCollections([...pokemonCollection, pokemon])
    }
    const deletePokemon = (id) => {
        const data = pokemonCollection.filter(i => i.id !== id)
        setPokemonCollections(data)
    }

    return (
        <div style={{ margin: 16 }}>
            <h1>Pokemon Searcher</h1>
            <PokemonForm addPokemon={addPokemon}/>
            <div style={{ margin: 16 }}>
                <Search onSearchChange={handleSearch}/>
            </div>
            <PokemonCollection
                deletePokemon={deletePokemon}
                pokemonCollection={desiredPokemon}
                showNoResults={false}
                setPokemonCollections={setPokemonCollections}
            />
        </div>
    );
};