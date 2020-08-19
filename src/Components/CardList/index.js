import React, { Component } from 'react';
import './index.css';
import Card from '../Card';

class CardList extends Component {
  state = {
    monsters: [],
    searchField: '',
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((error) => console.log(error));
  }

  searchChange = (e) => {
    this.setState(
      {
        searchField: e.target.value,
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <div>
        <input
          type='search'
          placeholder='Search Kittens'
          onChange={this.searchChange}
        />
        <div className='CardList'>
          {this.state.monsters.map((monster) => (
            <Card key={monster.id} monster={monster} />
          ))}
        </div>
      </div>
    );
  }
}

export default CardList;
