import React from 'react';

function SearchBar({typeSearch, parseSearch}){
    return(
        <section className="search-wrap">
            <input type="text" placeholder="Search..." className="searchbar" onChange={typeSearch} onKeyPress={parseSearch}/>
        </section>
    );
}
export default SearchBar;