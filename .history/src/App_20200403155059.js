import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: []
  };


  componentDidMount() {
    try {
      const res = fetch('http://localhost:8000/post/');
      const todos = res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }
