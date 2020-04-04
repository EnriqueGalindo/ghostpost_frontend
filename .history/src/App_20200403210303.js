import React, { Component } from 'react';

class App extends Component {
  state = {
    posts: []
  };
  function Boast(props) {
    <div>{this.state.posts.map(post => (
      <div>
            {post.bost_or_roast 
            ? <h3>
              boast
              {post.post_date}
              </h3>
              <p>{post.message}</p>
              <p>{post.popularity}</p>
            :null }

      </div>
    ))}</div>
  }


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