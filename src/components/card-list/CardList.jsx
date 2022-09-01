import React from 'react'

import MonsterData from './MonsterData'

import './CardList.css'

const CardList = (props) => {
    const { monsters } = props
    return (
        <div className='pokeblock-list grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {
                monsters.map((monster) => {
                    return <MonsterData key={monster.url} monsterName={monster.name} monsterUrl={monster.url} />
                })
            }
        </div>
    )
}

export default CardList