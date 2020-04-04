import React, { Component } from 'react';

class App extends Component {
  state = {
    posts: []
  };


  componentDidMount() {
    fetch("http://localhost:8000/post/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            posts: result
        })
      })
      
    }
    render() {
      return (
        {state.posts}
      )
    }
  }

   

    export default App;