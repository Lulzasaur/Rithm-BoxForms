import React, { Component } from 'react';

class NewBoxForm extends Component {  // ...
    constructor(props) {
        super(props);
        this.state = {height:0,width:0,color:'white'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.handleNewItem(this.state);
        this.setState({height:0, width:0,color:'white'});
      }
    
    handleChange(evt) {
      this.setState({[evt.target.name]: evt.target.value });
    }
  
    render() {
      return (
          <form onSubmit={this.handleSubmit}>
  
            <label htmlFor="height">Height:</label>
            <input id="height" name="height"
                   value={this.state.height}
                   onChange={this.handleChange} />
  
            <label htmlFor="width">Width:</label>
            <input id="width" name="width"
                   value={this.state.width}
                   onChange={this.handleChange} />

            <label htmlFor="color">Color:</label>
            <input id="color" name="color"
                   value={this.state.color}
                   onChange={this.handleChange} />       

            <button>Add a new box!</button>
  
          </form>
      );
    }
  } // end

  export default NewBoxForm;

