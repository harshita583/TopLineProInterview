import React from 'react'
import '../Components/App/App.css';
import { Button, TextField} from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";

var apiInput = ""
const callRestApi = async () =>{
    const response = await fetch(apiInput);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return JSON.stringify(jsonResponse);
}

class Search extends React.Component {
    state = { images : [] };

    handleOnChange = event => {
        let value = event.target.value
        value = value.replace(/ /g,"+"); //test url seemed to put plus signs as replacement for space character
        apiInput = "https://pixabay.com/api/?key=39059049-11ed37387d45d90df58ff9f1e&q=" + value + "&image_type=photo"
      };
    
    toggleButtonState = () => {
      callRestApi().then(result => {
        this.setState({ images: result });
      }); //will need to eventually pass to another component 
  };
  
  render() {
    return (
        <div>
            <h1>Welcome to Pixabay Search App</h1>
            <br/> <br/>
            <TextField
            id = "standard-basic"
            variant = "standard"
            onChange={this.handleOnChange }
            label = "Search for an image"
            />
            <Button
            variant = "contained"
            color = "primary"
            size = "medium"
            endIcon = {<SearchIcon/>}
            onClick = {this.toggleButtonState}
            >
            Send
            </Button>
        </div>
      );
  }
  }
  export default Search;