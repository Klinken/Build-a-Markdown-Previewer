"use strict";



class MarkdownConverter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          text: "# Markdown \nUndertitle \n## Hello \n`<addr>` \n\n ```if (isAwesome){return true}``` \n\n - This to code  \n- Well \n\n\n **As Kanye West said:** \n >We're living the future so \n\n ![Alt Text](/files/maybe.jpg)"

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
          
          <div dangerouslySetInnerHTML={{__html: marked(this.state.text)}}></div>
          
          </div>
      );
    }
  }



ReactDOM.render(<MarkdownConverter />, document.getElementById("markdown-converter"));
