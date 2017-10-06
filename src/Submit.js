import React,{Component} from 'react';
import ReactDOM from 'react-dom';



export default class Submit extends Component{
    constructor(props){
        super(props);
        this.state={};
        this.submitRecipe=this.submitRecipe.bind(this);
    }
   submitRecipe(){
       console.log("button clicked");
       this.props.history.push('/');
   }
    render(){
        return (
        <div className="row">
         <div className="col-xs-12 col-sm-12">
            <h1>Submit</h1>
           <form>
             <div className="form-group">
              <label for="name">Name</label>
               <input type="text" className="form-control" id="name"  placeholder="Enter the name of the recipe" />
                
             </div>
  
  
  
  <div className="form-group">
    <label for="description">Description</label>
    <textarea className="form-control" id="description" placeholder="Enter the description" rows="3"></textarea>
  </div>
  <div className="form-inline form-group">
  <div className=" form-group">
    <label for="quantity">Quantity </label>
    <input type="text" className="form-control" id="quantitiy" placeholder="Enter Quantity" rows="3" />
  </div>
  <div className=" form-group">
    <label for="ingredient">Ingredient </label>
    <input type="text" className="form-control" id="ingredient" placeholder="Enter ingredients" rows="3" />
    <button type="submit" onClick={this.submitRecipe} className="btn btn-info">Add</button>
  </div>
  </div>

  
  
  
  <button type="submit" onClick={this.submitRecipe} className="btn btn-primary">Submit</button>
</form>
</div>
</div>
            

        );
    }
}