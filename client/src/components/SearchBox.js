import React, {Component} from "react";


class SearchBox extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(e) {
    let value = e.target.value;
    this.setState({searchTerm: value});

  }

  render() {
    return (
      <div id="search" className="Search">
        <input 
          onChange={this.handleChange}
          onKeyUp={
            (e) => {
              /* this is so th search will only be done on enter key */
              if (this.props.loadNews && e.key === "Enter" && this.state.searchTerm) {
                this.props.loadNews(this.state.searchTerm);
                console.log(this.state.searchTerm);
              }
            }
          } 
          type="search" 
          placeholder="Search..." />
      </div>
    );
  }
}
export default SearchBox;

