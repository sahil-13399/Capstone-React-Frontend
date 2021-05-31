import React,{useState} from 'react'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Result from './Result';

function Dysgraphia() {
    const [selectedFile, setSelectedFile] = useState(null);
    //const UPLOAD_URL = "http://127.0.0.1:5000/api/dysgraphia/upload"
    const UPLOAD_URL = "https://flask-capstone-docker.herokuapp.com/api/dysgraphia/upload" 
    const [resultDysgraphia,setResultDysgraphia] = useState(-1);
    const [result,setResult] = useState("");
    const handleFileInput = (e) => {
        // handle validations
        const file = e.target.files[0];
        //console.log(file)
       setSelectedFile(file)
      };
    
      const submitForm = (e) => {
        e.preventDefault() 
     
        //setSelectedFile(e.target.files[0])
        const formData = new FormData();
        formData.append("file", selectedFile);
        console.log(formData.getAll)
        //console.log(gender);
        axios
          .post(UPLOAD_URL, formData,{ crossDomain: true })
          .then((res) => {
            console.log(res);
            setResultDysgraphia(1)
            res.data.Status ===1 ? setResult("You Do not have Dysgraphia") : setResult("You have Dysgraphia")
            console.log(res.data.Status)
          })
          .catch((err) => alert("Please enter the details correctly"));
          // axios
          // .get(UPLOAD_URL)
          // .then((res) => {
          //   console.log(res);
          // })
          // .catch((err) => alert("Get request error"));
      };

    return (
        <div>
            {resultDysgraphia !== -1 ? <Result result={result}/> : 
            <form>
            <h1>  Please upload a picture of your handwriting</h1>
            <input style={{padding:10}} type="file" onChange={handleFileInput} />
            <Button style={{borderColor:'black',fontWeight:'bold'}}type="submit" onClick={submitForm} variant="outlined" color="primary">Submit</Button>
            </form>}   
        </div>
    )
}

export default Dysgraphia
