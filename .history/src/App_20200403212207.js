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
          {this.state.filter === 0 ? 
          <div>{this.state.posts.map(post => (
          <div>
            <h2>{post.post_date}
                {post.bost_or_roast ? "boast" : "roast"}
            </h2>
            <p>{post.message}</p>
            <p>{post.popularity}</p>

          </div>
        ))}
        </div>: 
        <div>{this.state.filter === 1} ? 
        <div>
        {this.state.posts.map(post => (
          <div>
            <h2>{post.post_date}
                {post.bost_or_roast ? "boast" : "roast"}
            </h2>
            <p>{post.message}</p>
            <p>{post.popularity}</p>
          </div>:

        </div>}
        </div>
      )
    }
  }

   

    export default App;