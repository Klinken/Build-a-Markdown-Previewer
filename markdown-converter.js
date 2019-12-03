"use strict";


class MarkdownConverter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          text: ""
        };
  
      // This binding is necessary to make `this` work in the callback
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange() {
      this.setState(state => ({
        text: "Hello"
      }));
    }
  
    render() {
      return (
          <div>
          <textarea />
          
          </div>
      );
    }
  }
  



ReactDOM.render(<MarkdownConverter />, document.getElementById("markdown-converter"));