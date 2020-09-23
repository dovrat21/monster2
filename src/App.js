import React, {Component} from 'react';
import {CardList} from './components/card-list/cards-list.component';
import {SearchBox} from './components/searc-box/search-box.component';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      string:"dubdub",
      monsters:[],
      searchField:"",
      title:"",
      meaningOfLife:47 + this.props.increment
     
     }
     
  
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json().then(users=>this.setState({monsters:users})));
  }

  
handleChange = e =>{
  this.setState({searchField:e.target.value,
                 title:e.target.value
  });
  
};

handleClick = () =>{
  //this.setState({       not synchronize - there is severtal setstate that might interupt. if setstate include this.state we should do something else
   // meaningOfLife:this.state.meaningOfLife +1
 // })

 this.setState((prevState,prevProps) => {
   return {meaningOfLife:prevState.meaningOfLife + prevProps.increment }
 }, 
    
  () =>console.log(this.state.meaningOfLife)
  )
 
 
};


  render(){
    const { monsters, searchField,title} = this.state;
    const filteredMonsters = monsters.filter( monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
   
        return (
          <div className="App">
           
            <h1 className="dovfont">Monster rolex</h1>
           
            <input className='search-mons' type="search"  placeholder="dov2" onChange={e => this.setState({searchField: e.target.value})} />
            <h2>{this.state.meaningOfLife}</h2>
            <button onClick={this.handleClick}>
              update
            </button>
            <div>
              מחפש:
        <span>{title}</span>
            </div>
           <SearchBox className="search-mons" placeHolder='search monsters' handleChange={this.handleChange} />
            <CardList monsters={filteredMonsters}>{ }</CardList>
              
           
            
            
              
          </div>
        );
     


    
  }




}

export default App;
