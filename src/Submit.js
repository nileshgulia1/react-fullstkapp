import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Ingredients from './Ingredients';
import IngredientList from './IngredientList';



export default class Submit extends Component{
    constructor(props){
        super(props);
        this.state={
            name: "newRecipe",
            description: "Description",
            ingredients: []
        };
        this.submitRecipe=this.submitRecipe.bind(this);
    }
   submitRecipe(){
       console.log("button clicked");
       console.log(this.name.value , this.description.value);
       let newRecipe=this.state;
       newRecipe.name=this.name.value;
       newRecipe.description=this.description.value;
       this.setState({name:newRecipe});
       
   }
   addIngredient(quantity, ingredients){
       console.log("Add ingredients",quantity ,ingredients);
       let newRecipe=this.state;
       newRecipe.ingredients.push({quantity:quantity ,ingredients:ingredients});
       this.setState({name:newRecipe});
       console.log(newRecipe);
   }
    render(){
        return (
        <div className="row">
         <div className="col-xs-12 col-sm-12">
            <h1>Submit</h1>
           <form>
             <div className="form-group">
              <label htmlFor="name">Name</label>
               <input type="text" ref={(input) => {this.name = input;}} className="form-control" id="name"  placeholder="Enter the name of the recipe" />
                
             </div>
  
  
  
  <div className="form-group">
    <label htmlFor="description">Description</label>
    <textarea className="form-control" ref={(curry) => {this.description = curry;}} id="description" placeholder="Enter the description" rows="3"></textarea>
  </div>
  <IngredientList recipe={this.state} />
  <Ingredients addIngredient={(quantity,ingredients) => {this.addIngredient(quantity,ingredients)}} />

  
  
  
  <button type="button" onClick={this.submitRecipe} className="btn btn-primary">Submit</button>
</form>
</div>
</div>
            

        );
    }
}