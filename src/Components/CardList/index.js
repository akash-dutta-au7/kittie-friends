import React, { Component } from 'react';
import './index.css';
import Card from '../Card';
import Search from '../Search';
class CardList extends Component {
  state = {
    kittens: [],
    searchField: '',
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ kittens: users }))
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
    //for search
    const { kittens, searchField } = this.state;
    const filterKitten = kittens.filter((kitten) =>
      kitten.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div>
        <Search placeholder='Search kittens' searchChange={this.searchChange} />
        <div className='CardList'>
          {filterKitten.map((kitten) => (
            <Card key={kitten.id} kitten={kitten} />
          ))}
        </div>
      </div>
    );
  }
}

export default CardList;
