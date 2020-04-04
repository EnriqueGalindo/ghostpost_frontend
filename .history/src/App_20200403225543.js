import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filter: 0,
      message: "",
      rost_or_boast: true
    };
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
  
    
  SetFilterBoast = () => {
    this.setState({
      filter: 1
    })
  }

  SetFilterRoast = () => {
    this.setState({
      filter: 2
    })
  }

  SetFilterAll = () => {
    this.setState({
      filter: 0
    })
  }
  
  SetFilterPost = () => {
    this.setState({
      filter: 3
    })
  }

    render() {
      return (
        <div>
          <button onClick={this.SetFilterBoast}>Boast</button>
          <button onClick={this.SetFilterRoast}>Roast</button>
          <button onClick={this.SetFilterAll}>All</button>
          <button onClick={this set}>Post</button>
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
        <div>
          {this.state.filter === 1 ? 
        <div>{this.state.posts.map(post => (
          
            <div>
              {post.bost_or_roast ?
              <h3>
                {post.post_date}
                boast
                <p>
                  {post.message}
                  {post.popularity}
                </p>
              </h3>
              :""}
            </div>
            
        ))}
        </div>
          : <div>{this.state.filter === 2 ? 
            <div>{this.state.posts.map(post => (
              
                <div>
                  {post.bost_or_roast == 0 ?
                  <h3>
                    {post.post_date}
                    roast
                    <p>
                      {post.message}
                    </p>
                    <p>
                      {post.popularity}
                    </p>
                  </h3>
                  :""}
                </div>
                
            ))}
            </div>
              : <div>{this.state.filter === 3 ? 
                <div>
                  <form>
                    <label>message</label>
                    <input type="text"></input>
                    <label>boast or roast</label>
                    <input type="radio"></input>
                    <input type="submit">post</input>
                  </form>
                </div>
                  : ""}</div>}
                  }</div>}
        </div>
        }
        </div>
        </div>
      )
    }
    
  }

   

    export default App;