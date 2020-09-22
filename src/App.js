import React, {Component} from 'react';
import {CardList} from './components/card-list/cards-list.component';
import {SearchBox} from './components/searc-box/search-box.component';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      string:"dubdub",
      monsters:[],
      searchField:""
     
     }
     
  
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json().then(users=>this.setState({monsters:users})));
  }

handleChange = e =>{
  this.setState({searchField:e.target.value});
  
};


  render(){
    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter( monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
   
        return (
          <div className="App">
            <h1 className="dovfont">Monster rolex</h1>
            <input className='search-mons' type="search"  placeholder="dov2" onChange={e => this.setState({searchField: e.target.value})} />
          
           <SearchBox className="search-mons" placeHolder='search monsters' handleChange={e => this.handleChange} />
            <CardList monsters={filteredMonsters}>{ }</CardList>
              
           
            
            
              
          </div>
        );
     


    
  }




}

export default App;
