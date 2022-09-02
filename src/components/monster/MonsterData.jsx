import { useEffect } from 'react'
import React from 'react'
import axios from 'axios'

const MonsterData = (props) => {
    const { monsterName, monsterUrl } = props

    const properThis = (string) => {
        const chars = string.split('')
        chars[0] = chars[0].toUpperCase()
        return chars.join('')
    }
    
    const properMonsterName = properThis(monsterName)

    useEffect(() => {
        console.log('getting url')
        axios.get(monsterUrl).then((response) => {
            setMonsterData(response.data)
            setImageUrl(response.data.sprites.front_default)
        })
    }, [monsterUrl])

    return (
        <div className='pokeblock text-center px-4 py-6 bg-sky-100 border-b-sky-400 rounded-md'>
            <h2 className='text-2xl font-bold'>{properMonsterName}</h2>
        </div>
    )
}

export default MonsterData