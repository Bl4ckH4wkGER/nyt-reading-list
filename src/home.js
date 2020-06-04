import React from 'react';
import book from './book.svg';

export default class Home extends React.Component {

    render(){
        return(
            <div>
                <h1 className='page-heading'>Home</h1>
                <h2>Compile your list of future reads and movies!</h2>
                <p>Pick one of the search options above to search the NYT directory.</p>
                <p>Add and and remove items to build your list.</p>
                <img id='book-logo' src={book} alt='book'/>
                <p>Happy searching!</p>
            </div>
        )
    }
}