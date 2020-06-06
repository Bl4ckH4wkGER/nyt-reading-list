import React from 'react';
import ls from 'local-storage';
export default class Movies extends React.Component {
    state = {
        queryValue: '',
        results: [],
        numberOfResults: '',
        resultsLoading: true,
        moviesOnList: []
    };

    componentDidMount() {
        this.setState({
            moviesOnList: ls.get('moviesOnList') || [],
        })
    }

    queryValueEntryChange = (e) => {
        this.setState({ queryValue: e.target.value });
    }

    searchQuery = (e) => {
        e.preventDefault();
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.queryValue}&api-key=${process.env.REACT_APP_NYT_API_KEY}`)
        .then(res => res.json())
        .then(data => this.setState({
          results: data,
          numberOfResults: data.num_results,
          resultsLoading: false
        }));
    }

    searchResults = () => {
        return this.state.resultsLoading
        ? <div className='searchResultsLoading'>Please complete the search above to display a list of results.</div>
        : <div>
            <h2 className='page-sub-heading'>Results:</h2>
            <div className='query-info'>There are {this.state.numberOfResults} for the term "{this.state.queryValue}".</div>
            <div className='search-results'>
                {this.state.results.results.map((movie, index) => 
                    <div key={index} id={`${this.state.queryValue}${index}`} className='movie-container'>
                        <h3 className='movie-title'>{movie.display_title}</h3>
                        <h4 className='movie-reviewer'>Reviewed by {movie.byline}</h4>
                        <p className='movie-summary'>{movie.summary_short}</p>
                        <a className='movie-review-link' href={movie.link.url} target="_blank" rel="noopener noreferrer">Read the full review</a>
                        <br/>
                        <button className='movie-add-button' id={`addBtn${this.state.queryValue}${index}`} onClick={this.addMovieToList(index)}>Add to List</button>
                    </div>
                )}
            </div>
        </div>
    }

    addMovieToList = (index) => {
        return (e) => {
            const newMoviesOnList = [...this.state.moviesOnList, this.state.results.results[index]];
            this.setState({
                moviesOnList: newMoviesOnList
            });
            ls.set('moviesOnList', newMoviesOnList);
        }
    }

    render() {
        return(
            <div>
                <h1 className='page-heading'>Movies</h1>
                <h2>Add a keyword below:</h2>
                <form onSubmit={this.searchQuery}>
                    <label htmlFor="keyword">Keyword: </label>
                    <input
                        type="text"
                        id="keyword"
                        name="keyword"
                        placeholder="lebowski"
                        value={this.state.entry}
                        onChange={this.queryValueEntryChange}
                        required
                    />
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
                <div>{this.searchResults()}</div>
            </div>
        )
    }
}
