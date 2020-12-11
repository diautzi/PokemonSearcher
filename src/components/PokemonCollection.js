import React from 'react';
import PokemonCard from './PokemonCard';
import { Card } from 'semantic-ui-react';

function PokemonCollection({ pokemonCollection }) {
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
