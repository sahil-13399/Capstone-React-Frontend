import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useHistory } from "react-router-dom";

function Main() {
    const history = useHistory();
    
    return (
        <div>
            <h1 style={{color:'#b6afe3'}}>Which test do you want to take?</h1>
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group"style = {{margin:70}}>
                <Button style = {{width : 200,fontSize:20,fontWeight:'bold',color:'#b6afe3'}} onClick = {()=>{history.push(`/dyslexia`)}}>Dyslexia</Button>
                <Button style = {{width : 200,fontSize:20,fontWeight:'bold',color:'#b6afe3'}} onClick = {()=>{history.push(`/dysgraphia`)}}>Dysgraphia</Button>
                <Button style = {{width : 200,fontSize:20,fontWeight:'bold',color:'#b6afe3'}} onClick = {()=>{history.push(`/dyscalculia`)}}>Dyscalculia</Button>
            </ButtonGroup>
        </div>
    )
}

export default Main
