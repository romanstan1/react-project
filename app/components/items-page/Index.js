import React from 'react';
import Item from './Item.js';

export default class ItemsIndex extends React.Component {

  constructor() {
    super();
    this.state = {
      items: [
        {
          name: 'Toffee',
          price: '£12.00',
        },
        {
          name: 'Chesnut',
          price: '£2.30',
        },
        {
          name: 'Cup',
          price: '£4.30',
        },
        {
          name: 'Banana',
          price: '£0.50',
        },
        {
          name: 'Rabbit',
          price: '£35',
        },
        {
          name: 'Peanut',
          price: '£0.50',
        },
        {
          name: 'Squirrel',
          price: '£5',
        },
        {
          name: 'Mordor',
          price: '£95',
        }
      ]
    }
  }





  render(){

    // console.log(this);
    // console.log({item});
    return(
      <div>
        <br/>
        ITEMS PAGE
        <br/>
        <br/>
        { this.state.items.map((item, index) =>
          <Item item={item} index={index} key={index} />
        )}
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}
