import React, {Component} from 'react'
import CardList from './CardList'
import {robots} from '../Data/robots'
import SearchBox from './SearchBox'
import '../CSS/App.css'
class App extends Component  {
    constructor(){
        super()
        this.state ={
            robots:robots,
            searchfield:''
        }
    }
    onSearchChange=(event)=>{
        this.setState({searchfield: event.target.value})
        
    }
    
    render(){
        const filterRobots  = this.state.robots.filter(robots => {return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());})
        //console.log(filterRobots);
       return(
        <div className='tc'>
            <h1 className='f2'>Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filterRobots}/>
        </div>
       )
   }
}
export default App;