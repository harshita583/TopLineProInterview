import React, { useRef, Component, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import '../Components/App/App.css';
import {ImageList, ImageListItem} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';

const ImageGrid = (props) => {
    let [state, setState] = useState({images : []});
    let navigate = useNavigate(); 

    useEffect(() => { //lets us change the states
        if (state.images.length!=0){
            if (Object.keys(state.images).length>0){
                console.log(Object.keys(state.images))
                navigate('/clickedImage', {state:{state}}); // will need this to navigate to another page when image is clicked
            }
           
        }
      }, [state]);
      if (state.images.length!=0){
        if (Object.keys(state.images).length>0){
            console.log("state full")
        }
       
    }
    var info = (props.images)
    var additionalInfo = ''
    var hits = []
    if (info.length > 0){
        let additionalInfo = JSON.parse(info)
        var hits = additionalInfo.hits
    }
    return (
        <div>
        <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
        {hits.map((item) => (
            // CardAction needed so that you can actually click on the image
            <CardActionArea>
            <ImageListItem key={item.webformatURL}>
            <img
                src={`${item.webformatURL}?w=161&fit=crop&auto=format`}
                srcSet={`${item.webformatURL}?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={item.id}
                loading="lazy" 
                onClick = {function(){
                    setState({images: item})
                  }}
              
            />
            </ImageListItem>
            </CardActionArea>
          
    ))}
</ImageList>
        </div>   
      );
  }
  export default ImageGrid;