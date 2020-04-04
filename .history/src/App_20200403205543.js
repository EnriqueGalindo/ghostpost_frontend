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
    function Boast(props) {
      <div>{this.state.posts.map(post => (
        <div>
              {post.bost_or_roast 
              ? <h3>
                boast
                {post}
                </h3>
              : "roast"}
          </h2>
          <p>{post.message}</p>
          <p>{post.popularity}</p>

        </div>
      ))}</div>
    }
    render() {
      return (
        <div>{this.state.posts.map(post => (
          <div>
            <h2>{post.post_date}
                {post.bost_or_roast ? "boast" : "roast"}
            </h2>
            <p>{post.message}</p>
            <p>{post.popularity}</p>

          </div>
        ))}</div>
      )
    }
  }

   

    export default App;