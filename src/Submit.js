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
        return (<div>
            <h1>
            Submit</h1>
            <button onClick={this.submitRecipe}>Submit a Recipe</button>
            </div>

        );
    }
}