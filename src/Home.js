import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Submit from './Submit';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            recipes:JSON.parse(localStorage.getItem('recipes')) || [],
        };
    }
    render(){
        return (
            <div>
            <hi>Home</hi><br />
            {this.state.recipes[0].name} - {this.state.recipes.description}
            </div>

        );
    }
}