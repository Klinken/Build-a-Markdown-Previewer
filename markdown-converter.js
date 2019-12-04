"use strict";



class MarkdownConverter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          text: '**Hello**'
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
