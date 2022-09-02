import React from 'react'
import { Link } from 'react-router-dom'

import MonsterRow from '../monster/MonsterRow'

import './CardList.css'

const CardList = (props) => {
    const { monsters } = props

    const getPokeID = (url) => {
        const pokeUrlArr = url.split('/')
        const pokeID = pokeUrlArr[pokeUrlArr.length - 2]
        return pokeID
    }

    return (
        <div className='pokeblock-list grid grid-cols-1 gap-2'>
            {
                monsters.map((monster) => {
                    const pokeID = getPokeID(monster.url)
                    return <Link key={pokeID} to={`/poke/${pokeID}`}>
                        <MonsterRow key={monster.url} monsterName={monster.name} monsterUrl={monster.url} />
                    </Link>
                })
            }
        </div>
    )
}

export default CardList