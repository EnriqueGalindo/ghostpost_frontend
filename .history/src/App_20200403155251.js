import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: []
  };


  componentDidMount() {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });