import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: []
  };


  componentDidMount() {
    try {http
      const res = await fetch('://127.0.0.1:8000/api/');
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }
