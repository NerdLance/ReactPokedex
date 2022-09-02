import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import PokeData from '../components/poke/PokeData'
import RandomPokemonLink from '../components/random/RandomPokemonLink'

const PokeDisplay = () => {
    console.log('Render PokeDisplay')
    const [pokeData, setPokeData] = useState({
        pokeName: '',
        pokeSprite: '',
        pokeHeight: 0,
        pokeWeight: 0
    })

    let { id } = useParams()

    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${id}`

    useEffect(() => {
        console.log('getting pokeData')
        axios.get(pokeUrl).then((response) => {
            const newPokeData = {
                pokeName: properThis(response.data.name),
                pokeSprite: response.data.sprites.front_default,
                pokeHeight: response.data.height,
                pokeWeight: response.data.weight
            }
            setPokeData(newPokeData)
        })
    }, [id])

    const properThis = (string) => {
        const chars = string.split('')
        chars[0] = chars[0].toUpperCase()
        return chars.join('')
    }

    return (
        <div>
            <div className='body-container container mx-auto py-4'>
                <Link to='/' className='back-to-pokedex-link underline hover:no-underline'>
                    <button className='py-2 px-4 mb-4 mr-2 rounded-full bg-sky-600 hover:bg-sky-500 text-white'>Back to Pokedex</button>
                </Link>
                <RandomPokemonLink />
                <PokeData pokeData={pokeData} />
            </div>
        </div>
    )
}

export default PokeDisplay