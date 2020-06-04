(this["webpackJsonpnyt-reading-list"]=this["webpackJsonpnyt-reading-list"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/book.ffdb5b1a.svg"},20:function(e,t,a){e.exports=a.p+"static/media/empire-state.3aecda0c.svg"},22:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),l=a.n(s),c=(a(27),a(11)),o=a(1),u=a(6),i=a(7),m=a(9),d=a(8),h=a(19),p=a.n(h),y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"page-heading"},"Home"),r.a.createElement("h2",null,"Compile your list of future reads and movies!"),r.a.createElement("p",null,"Pick one of the search options above to search the NYT directory."),r.a.createElement("p",null,"Add and and remove items to build your list."),r.a.createElement("img",{id:"book-logo",src:p.a,alt:"book"}),r.a.createElement("p",null,"Happy searching!"))}}]),a}(r.a.Component),E=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={genres:[],genresLoading:!0,queryDate:"",queryGenre:"",results:[],resultsLoading:!0,errorMessage:""},e.searchForm=function(){return e.state.genresLoading?r.a.createElement("div",{className:"searchFormLoading"},"Loading genres..."):r.a.createElement("div",null,r.a.createElement("h2",null,"Add a date and select a genre in the form below:"),r.a.createElement("form",{onSubmit:e.searchQuery},r.a.createElement("label",{htmlFor:"date"},"Date: "),r.a.createElement("input",{type:"text",id:"date",name:"date",placeholder:"2020-02-20",value:e.state.queryDate,onChange:e.queryDateEntryChange,required:!0}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"genre"},"Genre: "),r.a.createElement("select",{id:"genre",name:"genre",onChange:e.queryGenreEntryChange},r.a.createElement("option",{value:""},"Select one"),e.state.genres.results.map((function(e){return r.a.createElement("option",{key:e.list_name,value:e.list_name_encoded},e.list_name)}))),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit"})))},e.queryDateEntryChange=function(t){e.setState({queryDate:t.target.value})},e.queryGenreEntryChange=function(t){e.setState({queryGenre:t.target.value})},e.searchQuery=function(t){t.preventDefault(),fetch("https://api.nytimes.com/svc/books/v3/lists/".concat(e.state.queryDate,"/").concat(e.state.queryGenre,".json?api-key=").concat("COCHMynqLfj4ddpahmMAHUNGJ3pOqOfP")).then((function(e){if(404===e.status)throw new Error("No list found for list name and/or date provided.");return e.json()})).then((function(t){return e.setState({results:t,errorMessage:"",resultsLoading:!1})})).catch((function(t){var a=t.message;e.setState({resultsLoading:!0,errorMessage:a})}))},e.searchResults=function(){return e.state.resultsLoading?r.a.createElement("div",{className:"searchResultsLoading"},"Please complete the search above to display a list of results."):r.a.createElement("div",null,r.a.createElement("h2",{className:"page-sub-heading"},"Results:"),r.a.createElement("div",{className:"query-info"},"Closest possible query for ",e.state.results.results.list_name," is for ",e.state.results.results.published_date,"."),r.a.createElement("div",{className:"search-results"},e.state.results.results.books.map((function(t,a){return r.a.createElement("div",{key:t.title,id:"".concat(e.state.queryGenre).concat(a),className:"book-container"},r.a.createElement("img",{className:"book-image",src:t.book_image,alt:"book cover"}),r.a.createElement("h3",{className:"book-title-author"},t.title," by ",t.author),r.a.createElement("p",{className:"book-description"},t.description),r.a.createElement("a",{className:"book-amazon-link",href:t.amazon_product_url,target:"_blank",rel:"noopener noreferrer"},"Buy the book on Amazon"),r.a.createElement("br",null),r.a.createElement("button",{className:"book-add-button",id:"addBtn".concat(e.state.queryGenre).concat(a)},"Add to List"))}))))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.nytimes.com/svc/books/v3//lists/names.json?api-key=".concat("COCHMynqLfj4ddpahmMAHUNGJ3pOqOfP")).then((function(e){return e.json()})).then((function(t){return e.setState({genres:t,genresLoading:!1})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"page-heading"},"Bestsellers"),r.a.createElement("div",null,this.searchForm()),r.a.createElement("div",{className:"queryErrorMessage"},this.state.errorMessage),r.a.createElement("div",null,this.searchResults()))}}]),a}(r.a.Component),b=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={queryValue:"",results:[],numberOfResults:"",resultsLoading:!0},e.queryValueEntryChange=function(t){e.setState({queryValue:t.target.value})},e.searchQuery=function(t){t.preventDefault(),fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=".concat(e.state.queryValue,"&api-key=").concat("COCHMynqLfj4ddpahmMAHUNGJ3pOqOfP")).then((function(e){return e.json()})).then((function(t){return e.setState({results:t,numberOfResults:t.response.meta.hits,resultsLoading:!1})}))},e.searchResults=function(){return e.state.resultsLoading?r.a.createElement("div",{className:"searchResultsLoading"},"Please complete the search above to display a list of results."):r.a.createElement("div",null,r.a.createElement("h2",{className:"page-sub-heading"},"Results:"),r.a.createElement("div",{className:"query-info"},"There are ",e.state.numberOfResults,' for the term "',e.state.queryValue,'".'),r.a.createElement("div",{className:"search-results"},e.state.results.response.docs.map((function(t,a){return r.a.createElement("div",{key:a,id:"".concat(e.state.queryValue).concat(a),className:"article-container"},r.a.createElement("h3",{className:"article-headline"},t.headline.main),r.a.createElement("h4",{className:"article-author"},"by ",t.byline.original),r.a.createElement("p",{className:"article-abstract"},t.abstract),r.a.createElement("a",{className:"article-link",href:t.web_url,target:"_blank",rel:"noopener noreferrer"},"Read the full article"),r.a.createElement("br",null),r.a.createElement("button",{className:"article-add-button",id:"addBtn".concat(e.state.queryValue).concat(a)},"Add to List"))}))))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"page-heading"},"Articles"),r.a.createElement("h2",null,"Add a keyword below:"),r.a.createElement("form",{onSubmit:this.searchQuery},r.a.createElement("label",{htmlFor:"keyword"},"Keyword: "),r.a.createElement("input",{type:"text",id:"keyword",name:"keyword",placeholder:"election",value:this.state.entry,onChange:this.queryValueEntryChange,required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement("div",null,this.searchResults()))}}]),a}(r.a.Component),v=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={queryValue:"",results:[],numberOfResults:"",resultsLoading:!0},e.queryValueEntryChange=function(t){e.setState({queryValue:t.target.value})},e.searchQuery=function(t){t.preventDefault(),fetch("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=".concat(e.state.queryValue,"&api-key=").concat("COCHMynqLfj4ddpahmMAHUNGJ3pOqOfP")).then((function(e){return e.json()})).then((function(t){return e.setState({results:t,numberOfResults:t.num_results,resultsLoading:!1})}))},e.searchResults=function(){return e.state.resultsLoading?r.a.createElement("div",{className:"searchResultsLoading"},"Please complete the search above to display a list of results."):r.a.createElement("div",null,r.a.createElement("h2",{className:"page-sub-heading"},"Results:"),r.a.createElement("div",{className:"query-info"},"There are ",e.state.numberOfResults,' for the term "',e.state.queryValue,'".'),r.a.createElement("div",{className:"search-results"},e.state.results.results.map((function(t,a){return r.a.createElement("div",{key:a,id:"".concat(e.state.queryValue).concat(a),className:"movie-container"},r.a.createElement("h3",{className:"movie-title"},t.display_title),r.a.createElement("h4",{className:"movie-reviewer"},"Reviewed by ",t.byline),r.a.createElement("p",{className:"movie-summary"},t.summary_short),r.a.createElement("a",{className:"movie-review-link",href:t.link.url,target:"_blank",rel:"noopener noreferrer"},"Read the full review"),r.a.createElement("br",null),r.a.createElement("button",{className:"movie-add-button",id:"addBtn".concat(e.state.queryValue).concat(a)},"Add to List"))}))))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"page-heading"},"Movies"),r.a.createElement("h2",null,"Add a keyword below:"),r.a.createElement("form",{onSubmit:this.searchQuery},r.a.createElement("label",{htmlFor:"keyword"},"Keyword: "),r.a.createElement("input",{type:"text",id:"keyword",name:"keyword",placeholder:"lebowski",value:this.state.entry,onChange:this.queryValueEntryChange,required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement("div",null,this.searchResults()))}}]),a}(r.a.Component),f=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("p",null,"Reading List.")}}]),a}(r.a.Component),g=a(20),N=a.n(g);a(28);var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,null,r.a.createElement("div",{className:"header-content"},r.a.createElement("img",{id:"app-logo",src:N.a,alt:"Empire State Building"}),r.a.createElement("div",{className:"app-name"},"NYT - What to read and watch?"),r.a.createElement("button",{className:"header-button"},r.a.createElement(c.b,{className:"header-link",to:"/"},"HOME")),r.a.createElement("button",{className:"header-button"},r.a.createElement(c.b,{className:"header-link",to:"/bestseller-search/"},"Bestsellers")),r.a.createElement("button",{className:"header-button"},r.a.createElement(c.b,{className:"header-link",to:"/article-search/"},"Articles")),r.a.createElement("button",{className:"header-button"},r.a.createElement(c.b,{className:"header-link",to:"/movie-search/"},"Movies"))),r.a.createElement("div",{className:"app-content"},r.a.createElement("div",{className:"search-area"},r.a.createElement(o.a,{exact:!0,path:"/",component:y}),r.a.createElement(o.a,{exact:!0,path:"/bestseller-search",component:E}),r.a.createElement(o.a,{exact:!0,path:"/article-search",component:b}),r.a.createElement(o.a,{exact:!0,path:"/movie-search",component:v})),r.a.createElement("div",{className:"list-area"},r.a.createElement(f,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.380540f0.chunk.js.map