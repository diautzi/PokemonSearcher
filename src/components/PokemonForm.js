import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

export default function PokemonForm({addPokemon}) {
    const [name, setName] = useState('');
    const [hp, setHp] = useState('');
    const [frontUrl, setFrontUrl] = useState('');
    const [backUrl, setBackUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length > 0 && hp.length > 0 && frontUrl.length > 0 && backUrl.length > 0) {
            fetch('http://localhost:3000/pokemon', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    name,
                    stats: [
                        {
                            value: hp,
                            name: 'hp'
                        }
                    ],
                    sprites: {
                        front: frontUrl,
                        back: backUrl
                    }
                })
            })
                .then(resp => resp.json())
                .then(data => addPokemon(data))
                .catch(error => console.error(error))
            // reset state to clear form inputs         
            setFrontUrl('')
            setHp('')
            setBackUrl('')
            setName('')
        } else alert("Inputs cannot be blank, please try again!")
    };

    return (
        <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              placeholder="Name"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Form.Input
              fluid
              label="hp"
              placeholder="hp"
              name="hp"
              value={hp}
              onChange={e => setHp(e.target.value)}
            />
            <Form.Input
              fluid
              label="Front Image URL"
              placeholder="url"
              name="frontUrl"
              value={frontUrl}
              onChange={e => setFrontUrl(e.target.value)}
            />
            <Form.Input
              fluid
              label="Back Image URL"
              placeholder="url"
              name="backUrl"
              value={backUrl}
              onChange={e => setBackUrl(e.target.value)}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
}
