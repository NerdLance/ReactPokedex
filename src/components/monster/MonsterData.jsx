import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'

const MonsterData = (props) => {
    const [monsterData, setMonsterData] = useState({})
    const [imageUrl, setImageUrl] = useState('')

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

/*
class MonsterData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: props.monsterName,
            url: props.monsterUrl,
            monsterData: {},
            image: ""
        }
    }
  
    componentDidMount() {
        console.log('Monster Component Mounted')
        axios.get(this.state.url).then((response) => {
            this.setState(() => {
                return { 
                    monsterData: response.data,
                    image: response.data.sprites.front_default 
                }
            })
        })
    }

    render() {
        return (
            <div className='pokeblock text-center px-4 py-6 bg-sky-100 border-b-sky-400 rounded-md'>
                <img className='mx-auto' src={this.state.image}/>
                <h2 className='text-2xl font-bold'>{this.state.name}</h2>
                <p>{this.state.url}</p>
            </div>
        )
    }
}
*/

export default MonsterData