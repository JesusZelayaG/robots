import React from 'react'
import CardList from './CardList'
import {robots} from '../Data/robots'
import SearchBox from './SearchBox'
const App = () => {
    return(
    <div className='tc'>
        <h1>Robofriends</h1>
        <SearchBox />
        <CardList robots={robots}/>
    </div>
    );
}
export default App;