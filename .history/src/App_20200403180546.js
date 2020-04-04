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
            posts: result.results
        })
      })
      
    }
    render() {
      return (
        <div>{this.state.posts.map((post) => {
         return for (let i = 0; i<post.length; i++){
           return i
          }
        })}</div>
      )
    }
  }

   

    export default App;