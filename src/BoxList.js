import uuid from "uuid/v4";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import React, { Component } from 'react';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {items:[]};
        this.addItem = this.addItem.bind(this);
      }


    /** Add new box to list. */
    addItem(item) {
      let addMe = {...item, id: uuid()};
      this.setState(st => ({
        items: [...st.items, addMe]}));
    }

    remove(id){
        this.setState(st => ({
            items: st.items.filter(box => box.id !== id)
        }))

    }
  
    /** Render new item form & list of items in cart */
    render() {
      let boxes = this.state.items.map(item => (
          <Box height={item.height} width={item.width} color={item.color} removeMe={()=> this.remove(item.id)}/> ));
  
      return (
          <div className="ShoppingList">
            <NewBoxForm handleNewItem={this.addItem} />
            <div>{boxes}</div>
          </div>
      );
    }
  } // end

  export default BoxList;