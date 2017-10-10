import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';




class Ingredients extends Component {
    constructor(props){
        super(props);
        this.state={};
        this.addIngredients=this.addIngredients.bind(this);
    }
    addIngredients(){
        console.log("Ingredients added");
        console.log(this.quantity.value , this.ingredient.value);
        this.props.addIngredient(this.quantity.value , this.ingredient.value);
    }
  render() {
    return (  
      
      <div className="form-inline form-group">
  <div className=" form-group">
    <label htmlFor="quantity">Quantity </label>
    <input type="text"  ref={(lebron) => {this.quantity = lebron;}} className="form-control" id="quantity" placeholder="Enter Quantity" rows="3" />
  </div>
  <div className=" form-group">
    <label htmlFor="ingredient">Ingredient </label>
    <input type="text" className="form-control" 
    ref={(Rose) => {this.ingredient = Rose;}}
    id="ingredient" placeholder="Enter ingredients" rows="3" />
    <button type="button" onClick={this.addIngredients} className="btn btn-info">Add</button>
  </div>
  </div>
      
     
    );
  }
}

export default Ingredients;
