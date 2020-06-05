import React from 'react';

export default class BestSellerSearch extends React.Component {
    state = {
        genres: [],
        genresLoading: true,
        queryDate: '',
        queryGenre: '',
        results: [],
        resultsLoading: true,
        errorMessage: '',
        booksOnList: []
    };

    componentDidMount() {
        fetch(`https://api.nytimes.com/svc/books/v3//lists/names.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`)
        .then(res => res.json())
        .then(data => this.setState({
          genres: data,
          genresLoading: false
        }));
    }

    searchForm = () => {
        return this.state.genresLoading
        ? <div className='searchFormLoading'>Loading genres...</div>
        : <div>
            <h2>Add a date and select a genre in the form below:</h2>
            <form onSubmit={this.searchQuery}>
                <label htmlFor="date">Date: </label>
                <input 
                    type="text"
                    id="date"
                    name="date"
                    placeholder="2020-02-20"
                    value={this.state.queryDate}
                    onChange={this.queryDateEntryChange}
                    required
                />
                <br/>
                <label htmlFor="genre">Genre: </label>
                <select id="genre" name="genre" onChange={this.queryGenreEntryChange}>
                    <option value=''>Select one</option>
                    {this.state.genres.results.map(result =>
                        <option key={result.list_name} value={result.list_name_encoded}>{result.list_name}</option>
                    )}
                </select>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    }

    queryDateEntryChange = (e) => {
        this.setState({ queryDate: e.target.value });
    }

    queryGenreEntryChange = (e) => {
        this.setState({ queryGenre: e.target.value });
    }

    searchQuery = (e) => {
        e.preventDefault();
        fetch(`https://api.nytimes.com/svc/books/v3/lists/${this.state.queryDate}/${this.state.queryGenre}.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`)
        .then(res => {
            if (res.status === 404) {
                throw new Error('No list found for list name and/or date provided.');
            } else {
                return res.json();
            }
        })
        .then(data => this.setState({
          results: data,
          errorMessage: '',
          resultsLoading: false
        }))
        .catch(error => {
            const errorMessage = error.message;
            this.setState({ resultsLoading: true, errorMessage });
        });
    }

    searchResults = () => {
        return this.state.resultsLoading
        ? <div className='searchResultsLoading'>Please complete the search above to display a list of results.</div>
        : <div>
            <h2 className='page-sub-heading'>Results:</h2>
            <div className='query-info'>Closest possible query for {this.state.results.results.list_name} is for {this.state.results.results.published_date}.</div>
            <div className='search-results'>
                {this.state.results.results.books.map((book, index) => 
                    <div key={book.title} id={`${this.state.queryGenre}${index}`} className='book-container'>
                        <img className='book-image' src={book.book_image} alt='book cover'/>
                        <h3 className='book-title-author'>{book.title} by {book.author}</h3>
                        <p className='book-description'>{book.description}</p>
                        <a className='book-amazon-link' href={book.amazon_product_url} target="_blank" rel="noopener noreferrer">Buy the book on Amazon</a>
                        <br/>
                        <button className='book-add-button' id={`addBtn${this.state.queryGenre}${index}`} onClick={this.addBookToList(index)}>Add to List</button>
                    </div>
                )}
            </div>
        </div>
    }

    addBookToList = (index) => {
        return (e) => {
            const newBooksOnList = [...this.state.booksOnList, this.state.results.results.books[index]]
            this.setState({
                booksOnList: newBooksOnList
            })
        }
    }
    
    render(){
        return(
            <div>
                <h1 className='page-heading'>Bestsellers</h1>
                <div>{this.searchForm()}</div>
                <div className='queryErrorMessage'>{this.state.errorMessage}</div>
                <div>{this.searchResults()}</div>
            </div>
        )
    }
}