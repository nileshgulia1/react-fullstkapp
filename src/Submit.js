import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Ingredients from './Ingredients';



export default class Submit extends Component{
    constructor(props){
        super(props);
        this.state={};
        this.submitRecipe=this.submitRecipe.bind(this);
    }
   submitRecipe(){
       console.log("button clicked");
       console.log(this.name.value , this.description.value);
       
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
  <Ingredients />

  
  
  
  <button type="button" onClick={this.submitRecipe} className="btn btn-primary">Submit</button>
</form>
</div>
</div>
            

        );
    }
}