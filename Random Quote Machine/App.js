class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quote: '',
      author: ''
    }
  }
  
 
   componentDidMount() {
      this.getQuote()
   }

   getQuote() {
      let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

      axios.get(url)
         .then(res => {
            let data = res.data.quotes
            let quoteNum = Math.floor(Math.random() * data.length) //quote number
            let randomQuote = data[quoteNum] //actual quote

            this.setState({
               quote: randomQuote['quote'],
               author: randomQuote['author']
            })
         })
   }
    
   getNewQuote = () => {
      this.getQuote()
   }
 
  render(){
    return(
    <div id="quote-box">
      <div class="card text-center">
  <div class="card-header">
    freeCodeCamp
  </div>
  <div class="card-body">
    <h5 class="card-title">Random Quote Machine</h5>
    <p id="text" class="card-text">{this.state.quote}</p>
    <a href="#" id="author" class="btn btn-primary">{this.state.author}</a>
    <br/>
    <br />
    <button id="new-quote" onClick={this.getNewQuote} type="button" class="btn btn-outline-secondary">New Quote</button>
  </div>
  <div class="card-footer text-muted">
    <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${this.state.quote}`}> Tweet Quote </a>
  </div>
</div>
    </div>   
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));
