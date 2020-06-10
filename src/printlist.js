import React from 'react';
import ls from 'local-storage';

export default class PrintList extends React.Component {
    state = {
        booksOnList: [],
        articlesOnList: [],
        moviesOnList: [],
    }

    componentDidMount() {
        this.setState({
            booksOnList: ls.get('booksOnList') || [],
            articlesOnList: ls.get('articlesOnList') || [],
            moviesOnList: ls.get('moviesOnList') || [],
          });
    }

    render() {
        return(
            <div className='print-view'>
                <h1 className='page-heading'>Book-List</h1>
                <ul>
                    {this.state.booksOnList.map((book, index) => 
                        <li key={index}>
                            {book.title} by {book.author}
                        </li>
                    )}
                </ul>
                <h1 className='page-heading'>Article-List</h1>
                <ul>
                    {this.state.articlesOnList.map((article, index) => 
                        <li key={index}>
                            {article.headline.main} - {article.byline.original}
                        </li>
                        
                    )}
                </ul>
                <h1 className='page-heading'>Movie-List</h1>
                <ul>
                    {this.state.moviesOnList.map((movie, index) => 
                        <li key={index}>
                            {movie.display_title}
                        </li>
                    )}
                </ul>
            </div>

        )
    }
}