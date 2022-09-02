import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './routes/Home'
import Header from './components/layout/Header'
import PokeDisplay from './routes/PokeDisplay'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="App-container">
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Home />} />
          </Route>
          <Route path='/poke' element={<Header />}>
            <Route path=':id' element={<PokeDisplay />} />
          </Route>
        </Routes>
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
