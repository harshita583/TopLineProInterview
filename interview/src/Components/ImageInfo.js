import React from 'react'
import './App/App.css';
import {Paper, IconButton} from '@material-ui/core';
import {useLocation, useNavigate} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Table from '@material-ui/core/Table';
import TableBody from  '@material-ui/core/TableBody';
import TableCell from  '@material-ui/core/TableCell';
import TableContainer from  '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from  '@material-ui/core/TableRow';
import Home from "@material-ui/icons/Home";

function createTableData(name, value) {
    return { name, value};
  }


const ImageInfo = (props) => {
    let navigate = useNavigate(); 
    function goHome(){
        navigate('/')
    }
    let rows = []
    var imageInfo = ''
    const location = useLocation();
    if(location.state != null){
        if (location.state.state!= null){
            imageInfo = location.state.state.images
            console.log(imageInfo)
            rows = [
                createTableData('User', imageInfo.user),
                createTableData('UserID', imageInfo.user_id),
                createTableData('Likes', imageInfo.likes),
                createTableData('Tags', imageInfo.tags),
            ];
            console.log(rows)
        }
        return (
        <div> <br/> <br/>
        <IconButton 
            aria-label="home"
            onClick = {goHome}
        >
            <Home />
        </IconButton>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 345 }}
                component = "img"
                src={imageInfo.largeImageURL}
            />       
        </Card>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="Image Info">
                <TableHead>
                <TableRow>
                    <TableCell>Image Info</TableCell>
                    <TableCell align="right">Values</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    )};
}
export default ImageInfo;