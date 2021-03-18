import React, { Component } from 'react';
import PropTypes from 'prop-types';

 class Search extends 
Component{
  state = {
    text: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    
     this.props.searchUsers(this.state.text);
     this.setState({ text: ''});
    
    
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
render(){
    return (
      <div>
         <form className="form" onSubmit={this.onSubmit}>
          <input type="text" 
          placeholder="Search Users..." 
          name="text"
          value = {this.state.text}
          onChange={this.onChange}/>
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      
      </div>
    );
  }
};
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
