import { Link } from 'react-router-dom'

const RandomPokemonLink = () => {
    const getRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    const randomID = getRandom(1, 151)
    
    return (
        <Link to={`/poke/${randomID}`} className='back-to-pokedex-link underline hover:no-underline'>
            <button className='py-2 px-4 mb-4 rounded-full bg-sky-600 hover:bg-sky-500 text-white'>Random Pokemon</button>
        </Link>
    )
}

export default RandomPokemonLink