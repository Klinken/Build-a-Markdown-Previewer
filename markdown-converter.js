"use strict";



class MarkdownConverter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          text: "# The Markdown Converter\n\nGet a preview of your Github markdown\n\n## Some of the elements that you can use\n\n`<addr>` \n\nCodeblocks: \n\n ```if (isAwesome){return true}``` \n\n- This to code  \n - Well \n\n\n **As Kanye West said:** \n >We're living the future so \n\n ![Thank you](/files/maybe.jpg) \n\n **Well your welcome** \n\n [GitHub](http://github.com)"

        };
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) { 
        this.setState({
            text: event.target.value

          });
    }
      
    render() {
      return (
          <div>

          <textarea id="editor" value={this.state.text} onChange={this.handleChange.bind(this)} />
          <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.text)}}></div>
          
          </div>
      );
    }
  }



ReactDOM.render(<MarkdownConverter />, document.getElementById("markdown-converter"));
