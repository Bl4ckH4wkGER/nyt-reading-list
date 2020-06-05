import React from 'react';
import ls from 'local-storage';

export default class Articles extends React.Component {
    state = {
        queryValue: '',
        results: [],
        numberOfResults: '',
        resultsLoading: true,
        articlesOnList: []
    };

    queryValueEntryChange = (e) => {
        this.setState({ queryValue: e.target.value });
    }

    searchQuery = (e) => {
        e.preventDefault();
        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.state.queryValue}&api-key=${process.env.REACT_APP_NYT_API_KEY}`)
        .then(res => res.json())
        .then(data => this.setState({
          results: data,
          numberOfResults: data.response.meta.hits,
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
                {this.state.results.response.docs.map((document, index) => 
                    <div key={index} id={`${this.state.queryValue}${index}`} className='article-container'>
                        <h3 className='article-headline'>{document.headline.main}</h3>
                        <h4 className='article-author'>by {document.byline.original}</h4>
                        <p className='article-abstract'>{document.abstract}</p>
                        <a className='article-link' href={document.web_url} target="_blank" rel="noopener noreferrer">Read the full article</a>
                        <br/>
                        <button className='article-add-button' id={`addBtn${this.state.queryValue}${index}`} onClick={this.addArticleToList(index)}>Add to List</button>
                    </div>
                )}
            </div>
        </div>
    }

    addArticleToList = (index) => {
        return (e) => {
            const newArticlesOnList = [...this.state.articlesOnList, this.state.results.response.docs[index]]
            this.setState({
                articlesOnList: newArticlesOnList
            })
        }
    }

    render() {
        return(
            <div>
                <h1 className='page-heading'>Articles</h1>
                <h2>Add a keyword below:</h2>
                <form onSubmit={this.searchQuery}>
                    <label htmlFor="keyword">Keyword: </label>
                    <input
                        type="text"
                        id="keyword"
                        name="keyword"
                        placeholder="election"
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
