class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\n### And here's some other cool stuff:\nHeres some code, `<div></div>`, between 2 backticks.\n```\n// this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\nif (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\nAnd if you want to get really crazy, even tables:\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n* And last but not least, let's not forget embedded images:\n![React Logo w/ Text](https://goo.gl/Umyytc)",
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
 
    var inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };
    var outputStyle = {
      width: "800px",
      height: "85vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };

    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                
               
                  Markdown Previewer
                
              </h1>
            </div>
          </div>

          <div className="row mt-4">
            <div  className="col-md-6">
           
              <div className="col text-center">
                <h4>
                  
                    Markdown Input
                  
                </h4>
              </div>
              <div className="input" style={inputStyle}>
                <textarea
                  id="editor"
                  className="input"
                  style={inputStyle}
                  value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}
                >
                </textarea>
              </div>
            </div>

            <div className="col-md-6">
              
              <div className="col text-center">
                <h4>
                  
                    Preview
                  
                </h4>
              </div>
              <div
                id="preview" 
                style={outputStyle}
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById("root"));
