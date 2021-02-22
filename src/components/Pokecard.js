import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import loader from '../assets/35.gif';

export default function Pokecard(props){
    const [pokemon, setPokemon] = useState(null);
    const [flavorText, setFlavorText] = useState(null);

    const {pokeman} = props;

    useEffect(() => {
        axios.get(`${pokeman.url}`)
            .then(res => {
                setPokemon(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        pokemon && axios.get(`${pokemon.species.url}`)
            .then(res => {
                setFlavorText(res.data.flavor_text_entries[0].flavor_text)
            })
            .catch(err => {
                console.log(err);
            })
    }, [pokemon])

    const name = pokeman.name;
    // eslint-disable-next-line no-unused-expressions
    const capName = name[0].toUpperCase() + name.substring(1);
    
    return(
        <Pokemon>
            <div className='pokeImg'>
                <h3>#{pokemon && pokemon.id} - {capName}</h3>
                {pokemon ? <img src={pokemon.sprites.front_default} alt={pokemon.name}></img> : <img className='loading' src={loader} alt='loading'></img>}
            </div>
            <div className='pokeInfo'>
                {
                    flavorText ? <p>{flavorText.replace(/\f/g, ' ')}</p> : <img className='loading' src={loader} alt='loading'></img>
                }
            </div>
        </Pokemon>
    )
}

const Pokemon = styled.div`
    width: 30%;
    display: flex;
    flex-direction: row;
    margin-bottom: 5%;
    border: 3px double black;
    background: #D3D3D3;

    .pokeImg{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 30%;
        border-right: 1px solid black;
        text-align: center;
    }

    .pokeInfo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 70%;
        text-align: center;
        font-size: 1.4rem;
    }

    h3{
        font-size: 1.4rem;
    }

    .loading{
        width: 65px;
        height: 65px;
        text-align: center;
    }
`

