import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';

export default function PokemonCard({ pokemon }) {
    const { name, stats, sprites } = pokemon;
    const hp = stats.find(s => s.name === 'hp').value || 50;
    const [flipped, setFlipped] = useState(true);
    const togglePic = () => {
        setFlipped(!flipped)
    };

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
        </Card>
    );
};
