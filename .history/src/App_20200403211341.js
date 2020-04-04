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
          console.log(result)
          this.setState({
            posts: result.results,
            filter: 0
        })
      })
      
    }
    render() {
      return (
        <div>
          {this.state.filter == 0 ? }
        </div>
      )
    }
  }

   

    export default App;