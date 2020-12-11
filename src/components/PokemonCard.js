import React from 'react';
import { Card } from 'semantic-ui-react';

export default function PokemonCard({ pokemon }) {
    const { name, stats, sprites } = pokemon;
    const hp = stats.find(s => s.name === 'hp').value || 50;

    return (
        <Card>
            <div>
                <div className="image">
                    <img src={sprites.front} alt="oh no!" />
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
