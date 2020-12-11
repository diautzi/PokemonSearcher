import React, { useState } from 'react';
import { Button, Card } from 'semantic-ui-react';

export default function PokemonCard({ pokemon, deletePokemon }) {
    const { id, name, stats, sprites } = pokemon;
    const hp = stats.find(s => s.name === 'hp').value || 50;
    const [flipped, setFlipped] = useState(true);
    const togglePic = () => {
        setFlipped(!flipped)
    };

    const handleDelete = id => {
        fetch(`http://localhost:3000/pokemon/` + id, {
          method: "DELETE",
        })
        .then(resp => resp.json())
        .then(data => deletePokemon(data))
        .catch(error => console.error(error))
    }

    return (
        <Card>
            <div>
                <div onClick={togglePic} className="image">
                    <img src={flipped ? sprites.front : sprites.back} alt="oh no!" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                </div>
                <div className="extra content">
                    <span>
                        <i className="icon heart red" />
                        {hp} hp
                    </span>
                </div>
            </div>
            <Button onClick={() => deletePokemon(id)}>Delete</Button>
        </Card>
    );
};
