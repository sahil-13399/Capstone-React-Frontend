import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from "react-router-dom";

function Result({result}) {
    const history = useHistory();
    return (
        <div>
            <h1>{result}</h1>
            <Button style = {{width : 200,fontSize:20,fontWeight:'bold',color:'#b6afe3'}} onClick = {()=>{history.push(`/`)}}>Go To Home</Button>
        </div>
    )
}

export default Result
