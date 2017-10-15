import React,{Component} from 'react';
import ReactDOM from 'react-dom';



export default class IngredientList extends Component{
    constructor(props){
        super(props);
        this.state={};
        this.displayIngredients=this.displayIngredients.bind(this) ;
       }
       displayIngredients(){
           let resultsArray=[];
           this.props.recipe.ingredients.map((item,i) => {
               resultsArray.push(<li key={i}>{item.quantity} - {item.ingredients}</li>)
           } );
           return resultsArray;
       }
    render(){
        return (
            <ul>
           {this.displayIngredients()}
            </ul>

        );
    }
}