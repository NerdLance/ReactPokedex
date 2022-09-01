import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'

import Header from './components/layout/Header'
import CardList from './components/card-list/CardList'
import SearchBox from './components/search-box/SearchBox'

import './App.css';


const App = () => {
  console.log('render')
  const [searchField, setSearchField] = useState('')
  const [title, setTitle] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  
  const handleSearch = (event) => {
    const searchString = event.target.value.toLowerCase()
    setSearchField(searchString)
  }

  const titleChange = (event) => {
    const newTitle = event.target.value
    setTitle(newTitle)
  }

  console.log(title)

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10').then((response) => {
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

  return (
    <div className="App">
      <div className="App-container">
        <Header />
        <div>
          <div className='body-container container mx-auto py-4'>
            <SearchBox 
              onChangeHandler={handleSearch} 
              searchString={searchField} 
              placeholder='Search Pokemon' 
              className='search-box mb-4 text-xl focus:outline-0 focus:border-sky-600 rounded-md border-2 border-sky-400'
            />
            <CardList monsters={filteredMonsters} />
          </div>
        </div>
      </div>
    </div>
  )
}

/*
class App extends Component {
  constructor() {
    super();
    
    this.state = {
      monsters: [],
      filteredMonsters: [],
      searchString: ''
    }

    this.handleSearch = this.handleSearch.bind(this)
    console.log('Constructor')
  }

  handleSearch = (event) => {
    const searchString = event.target.value.toLowerCase()
    this.setState((state, props) => {
      return { searchString }
    })
  }

  componentDidMount() {
    console.log('Component Did Mount')
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10').then((response) => {
      this.setState(() => {
        return { monsters: response.data.results, filteredMonsters: response.data.results }
      })
    })
  }

  render() {
    console.log('Render')
    
    const { monsters, searchString } = this.state
    const { handleSearch } = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString)
    })

    return (
      <div className="App">
        <div className="App-container">
          <Header />
          <div>
            <div className='body-container container mx-auto py-4'>
              <SearchBox 
                onChangeHandler={handleSearch} 
                searchString={searchString} 
                placeholder='Search Pokemon' 
                className='search-box mb-4 text-xl focus:ring-0 rounded-md border-2 border-sky-400'
              />
              <CardList monsters={filteredMonsters} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
*/

export default App;
