import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Ingredients from './Ingredients';
import IngredientList from './IngredientList';
import Dropzone from 'react-dropzone';
import request from 'superagent';
//const CLOUDINARY_UPLOAD_PRESET = 'your_upload_preset_id';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dccttnury/upload';




export default class Submit extends Component{
    constructor(props){
        super(props);
        this.state={
            recipes: JSON.parse(localStorage.getItem('recipes')) || [],
            name: "newRecipe",
            description: "Description",
            ingredients: [],
            uploadedFileCloudinaryUrl: ''
        };
        this.submitRecipe=this.submitRecipe.bind(this);
        this.onImageDrop=this.onImageDrop.bind(this);
    }
   submitRecipe(){
       console.log("button clicked");
       console.log(this.name.value , this.description.value);
       let newRecipe=this.state;
       newRecipe.name=this.name.value;
       newRecipe.description=this.description.value;
       newRecipe.image=this.state.uploadedFileCloudinaryUrl;
       this.setState({name:newRecipe});
       let recipes=this.state.recipes;
       recipes.push(newRecipe);
       this.setState({recipes:recipes});
       console.log(recipes);
       var cache=[]; //another cache memory array used
       localStorage.setItem('recipes',JSON.stringify(recipes, function(key, value) {
        if (typeof value === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) {
                // Circular reference found, discard key
                return;
            }
            // Store value in our collection
            cache.push(value);
        }
        return value;
    }));
    this.props.history.push('/');
    

   }
   addIngredient(quantity, ingredients){
       console.log("Add ingredients",quantity ,ingredients);
       let newRecipe=this.state;
       newRecipe.ingredients.push({quantity:quantity ,ingredients:ingredients});
       this.setState({name:newRecipe});
       console.log(newRecipe);
   }
   onImageDrop(files){
    this.setState({
        uploadedFile: files[0]
      });
  
      this.handleImageUpload(files[0]);

   }
   handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                       // .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

    render(){
        return (
        <div className="row">
         <div className="col-xs-12 col-sm-12">
            <h1>Submit</h1>
           <form>
           <Dropzone
             multiple={false}
             accept="image/*"
             onDrop={this.onImageDrop}>
            <p>Drop an image or click to select a file to upload.</p>
             </Dropzone>
             <div>
                  {this.state.uploadedFileCloudinaryUrl === '' ? null :
            <div>
              <p>{this.state.uploadedFile.name}</p>
               <img alt={this.state.uploadedFile.name} src={this.state.uploadedFileCloudinaryUrl} />
            </div>}
             </div>
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