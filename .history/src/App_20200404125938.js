import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      id: 0,
      filter: 0,
      sorting: 0,
      message: "",
      bost_or_roast: true
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
  
  SetSortingVote = () => {
    this.setState({
      sorting: 1
    })
  }

  SetSortingDate = () => {
    this.setState({
      sorting: 0
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

  handleInputChange = event => {
    this.setState({bost_or_roast: !this.state.bost_or_roast})
  }

  handleTextChange = event => {
    this.setState({ message: event.target.value });
  };

  
  addPost = () => {
    
    fetch("http://localhost:8000/post/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        bost_or_roast: this.state.bost_or_roast,
        message: this.state.message,
      })
    }).then( res => console.log(res));
    

    window.location.reload();
    
  };

  handleSubmit = e => {
    e.preventDefault()
    this.addPost()
  }

  handleId = e => {
    this.setState({id: e.target.value})
  }

  handleUpvote = e => {
    let payload = this.handleId(e)
    fetch("http://localhost:8000/post/" + payload + "/up_vote")
      .then(res => res.json())
      .then(data => {
        this.setState({ like: data });
        window.location.reload();
      });
  };

    render() {
      return (
        <div>
          <button onClick={this.SetFilterBoast}>Boast</button>
          <button onClick={this.SetFilterRoast}>Roast</button>
          <button onClick={this.SetFilterAll}>All</button>
          <button onClick={this.SetFilterPost}>Post</button>
          <button onClick={this.SetSortingVote}>Sort by Vote</button>
          <button onClick={this.SetSortingDate}>Sort by Date</button>
        <div>
          {this.state.filter === 0 ? 
          <div>{this.state.sorting === 1 ?
          <div>{this.state.posts.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1).map((post, index) => (
          <div key={index}>
            <h2>{post.post_date}
                {post.bost_or_roast ? "boast" : "roast"}
            </h2>
            <p>{post.message}</p>
            <p>{post.popularity}</p>
            <button value={post.id} onClick={this.handleUpvote}>Upvote</button>

          </div>
        ))}
        </div>:
        <div>{this.state.posts.sort((a, b) => (a.post_date > b.popularity) ? -1 : 1).map((post, index) => (
          <div key={index}>
            <h2>{post.post_date}
                {post.bost_or_roast ? "boast" : "roast"}
            </h2>
            <p>{post.message}</p>
            <p>{post.popularity}</p>
            <button value={post.id} onClick={this.handleUpvote}>Upvote</button>

          </div>
        ))}
        </div>
        }</div>: 
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
                  <form onSubmit={this.handleSubmit}>
                    <label>message</label>
                    <input type="text" value={this.state.message} onChange={this.handleTextChange}></input>
                    <label> roast</label>
                    <input type="radio" value={this.state.bost_or_roast} onChange={this.handleInputChange}></input>
                    <button type="submit">post</button>
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