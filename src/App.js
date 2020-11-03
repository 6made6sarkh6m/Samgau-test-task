import React, {useState} from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar'
import MovieCardList from './components/MovieCardList';
function App() {
  const [state, setState] = useState({ //created state in order to save user types and results of search
    search: "", // this key will store what data user typed 
    results: [] // this key will store the result of search query from omdb api
  });
  
  
  const api = "http://www.omdbapi.com/?i=tt3896198&apikey=e0765da2";
  const typeSearch = (e)=>{ // this is an event listener that will take data from keyboard types and save it into my state's search key
    let search = e.target.value;//created variable in order to store user's keyboard types

    setState(state=>{ //calling setState and saving search variable's data inside search key in my state object
      return{...state, search:search}
    });

    //console.log(state.search); 
     
  }
  const parseSearch =(e)=>{ //this is an another event listener that will execute axio query to our api
    if(e.key==="Enter"){
      axios(api + "&s=" + state.search).then(({data})=>{
        if(data.Search!=null){ //data.Search is a key value in api object and i made this checking in order to avoid errors
                              //in case if its undefined
          //console.log(data.Search);
          let results = data.Search; //created results variable that will store array of objects based from user's search data
          setState(state=>{ //calling setState and saving results in results array in my state object
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
