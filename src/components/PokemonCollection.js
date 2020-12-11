import React from 'react';
import PokemonCard from './PokemonCard';
import { Card } from 'semantic-ui-react';

function PokemonCollection({ pokemonCollection }) {
    // pokemonCollection.map(poke => console.log(poke))
    return (
        <Card.Group itemsPerRow={6}>
            {pokemonCollection.map((pokemon =>
                <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon}
                />))
            }
        </Card.Group>
    );
};

export default PokemonCollection;
