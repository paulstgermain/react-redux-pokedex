import Pokecard from './Pokecard';
import styled from 'styled-components';

function Pokedex(props){

    return(
        <StyledPokedex>
            {props.pokemans.map(pokeman => {
                return <Pokecard key={pokeman.name} pokeman={pokeman} />
            })}
        </StyledPokedex>
    );
};

export default Pokedex;

const StyledPokedex = styled.section`
    width: 100%;
    padding-top: 5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`