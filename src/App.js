import React, {useState} from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar'
import MovieCardList from './components/MovieCardList';
function App() {
  const [state, setState] = useState({
    search: "",
    results: []
  });
  
  
  const api = "http://www.omdbapi.com/?i=tt3896198&apikey=e0765da2";
  const typeSearch = (e)=>{
    let search = e.target.value;

    setState(state=>{
      return{...state, search:search}
    });

    console.log(state.search);
     
  }
  const parseSearch =(e)=>{
    if(e.key==="Enter"){
      axios(api + "&s=" + state.search).then(({data})=>{
        if(data.Search!=null){
          //console.log(data.Search);
          let results = data.Search;
          setState(state=>{
            return{...state, results: results}
          });
        }
     })
    }
    
  }
  return (
    <div className="App">
        <header className="App-header">
          <h1>Test task with omdbAPI</h1>
        </header>
        <main>

          <SearchBar typeSearch={typeSearch} parseSearch={parseSearch}></SearchBar>
          
          <MovieCardList results={state.results}></MovieCardList>
        
        </main>
    </div>
  );
}

export default App;
