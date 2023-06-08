import React, { Component } from "react";
import Item from "./item";
import ListTask from "./ListTask";

class Items extends Component {
  state = {
    items: [{ id: 1, value: 0 }, { id: 2, value: 10 }, { id: 3, value: 0 }]
  };

  handleDelete = itemId => {
    const items = this.state.items.filter(item => item.id !== itemId);
    this.setState({ items: items });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.items.map(item => (
          <Item
            key={item.id}
            value={item.value}
            onDelete={this.handleDelete}
            id={item.id}
          />
          <button 
        </button>
        ))}
      </React.Fragment>
    );
  }
}

export default Items;