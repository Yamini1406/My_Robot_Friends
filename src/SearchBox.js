import React from 'react';

const SearchBox = ({searchChange}) => { //({}) -> destructuring here
    return(
        <div className='pa3'>
            {/* onChange is a built-in fn which executes a function when an input is changed */}
            <input className='pa3 bg-lightest-blue b--pink' type = 'search' placeholder='search your friends' onChange={searchChange}></input>
        </div>
    );
}

export default SearchBox;