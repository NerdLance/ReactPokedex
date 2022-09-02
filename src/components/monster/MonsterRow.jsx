const MonsterRow = (props) => {
    const { monsterName, monsterUrl } = props

    const properThis = (string) => {
        const chars = string.split('')
        chars[0] = chars[0].toUpperCase()
        return chars.join('')
    }
    
    const properMonsterName = properThis(monsterName)

    return (
        <div className='pokeblock text-center px-4 py-6 bg-sky-100 border-b-sky-400 hover:bg-sky-200 rounded-md'>
            <h2 className='text-2xl font-bold'>{properMonsterName}</h2>
        </div>
    )
}

export default MonsterRow