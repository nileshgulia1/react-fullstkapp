import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Submit from './Submit';
import IngredientList from './IngredientList';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            recipes:JSON.parse(localStorage.getItem('recipes')) || [],
        };
        this.displayRecipes=this.displayRecipes.bind(this);
    }
    displayRecipes(){
        let resultsArray=[];
        this.state.recipes.map((recipe,i) => {
            resultsArray.push(
                <div className="col-sm-4">
                {recipe.name}<br />
                {recipe.description}<br />
                
                </div>
            );
        });
        return resultsArray;
    }
    render(){
        return (
            <div className="row">
            <hi>Home</hi><br />
            {this.displayRecipes()}
            
            </div>

        );
    }
}