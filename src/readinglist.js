import React from 'react';
import ls from 'local-storage';

export default class ReadingList extends React.Component {
    state = {
        booksOnList: [],
        articlesOnList: [],
        moviesOnList: []
    };

    componentDidMount() {
        this.setState({
            booksOnList: ls.get('booksOnList') || [],
            articlesOnList: ls.get('articlesOnList') || [],
            moviesOnList: ls.get('moviesOnList') || [],
        })
    }

    removeBookFromList = (index) => {
        return (e) => {
          const newBooksOnList = this.state.booksOnList.filter((item, j) => index !== j);
          this.setState({
            booksOnList: newBooksOnList,
          });
          ls.set('booksOnList', newBooksOnList);
        }
    }

    removeArticleFromList = (index) => {
        return (e) => {
          const newArticlesOnList = this.state.articlesOnList.filter((item, j) => index !== j);
          this.setState({
            articlesOnList: newArticlesOnList,
          });
          ls.set('articlesOnList', newArticlesOnList);
        }
    }

    removeMovieFromList = (index) => {
        return (e) => {
          const newMoviesOnList = this.state.moviesOnList.filter((item, j) => index !== j);
          this.setState({
            moviesOnList: newMoviesOnList,
          });
          ls.set('moviesOnList', newMoviesOnList);
        }
    }

    render(){
        return(
            <div>
                <h1 className='page-heading'>List</h1>
                <h2 className='page-sub-heading'>Books:</h2>
                <ul>
                    {this.state.booksOnList.map((book, index) => 
                        <li key={index}>
                            {book.title} by {book.author}
                            <br/>
                            <button className='book-remove-button' onClick={this.removeBookFromList(index)}>Remove</button>
                        </li>
                    )}
                </ul>
                <h2 className='page-sub-heading'>Articles:</h2>
                <ul>
                    {this.state.articlesOnList.map((article, index) => 
                        <li key={index}>
                            {article.headline.main} - {article.byline.original}
                            <br/>
                            <button className='article-remove-button' onClick={this.removeArticleFromList(index)}>Remove</button>
                        </li>
                        
                    )}
                </ul>
                <h2 className='page-sub-heading'>Movies:</h2>
                <ul>
                    {this.state.moviesOnList.map((movie, index) => 
                        <li key={index}>
                            {movie.display_title}
                            <br/>
                            <button className='movie-remove-button' onClick={this.removeMovieFromList(index)}>Remove</button>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}
