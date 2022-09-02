import { useState, useEffect } from 'react'
import axios from 'axios'

import CardList from '../components/card-list/CardList'
import SearchBox from '../components/search-box/SearchBox'
import RandomPokemonLink from '../components/random/RandomPokemonLink'

const Home = () => {
    console.log('render home')
    const [searchField, setSearchField] = useState('')
    const [monsters, setMonsters] = useState([])
    const [filteredMonsters, setFilteredMonsters] = useState(monsters)

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then((response) => {
          setMonsters(response.data.results)
          setFilteredMonsters(response.data.results)  
        })
    }, [])

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
          return monster.name.toLowerCase().includes(searchField)
        })
    
        setFilteredMonsters(newFilteredMonsters)
    }, [monsters, searchField])

    const handleSearch = (event) => {
        const searchString = event.target.value.toLowerCase()
        setSearchField(searchString)
    }

    return (
        <div>
            <div className='body-container container mx-auto py-4'>
                <SearchBox 
                onChangeHandler={handleSearch} 
                searchString={searchField} 
                placeholder='Search Pokemon' 
                className='search-box md:w-full w-4/5 mx-auto mb-4 text-xl focus:outline-0 focus:border-sky-600 rounded-md border-2 border-sky-400'
                />
                <RandomPokemonLink />
                <CardList monsters={filteredMonsters} />
            </div>
        </div>
    )
}

export default Home