import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import './Dyslexia.css'
import Button from '@material-ui/core/Button';
import axios from 'axios';

function Dyslexia() {
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [gender, setGender] = useState("");
    const [nlanguage, setNLanguage] = useState("");
    const [olanguage, setOLanguage] = useState("");
    const [age, setAge] = useState("");
    const UPLOAD_URL = "https://httpbin.org/post"
    const [selectedFile, setSelectedFile] = useState(null);
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
        formData.append("gender", gender);
        formData.append("nlanguage", nlanguage);
        formData.append("olanguage", olanguage);
        formData.append("age", age);
        formData.append("file", selectedFile);
        console.log(formData.getAll)
        console.log(gender);
        axios
          .post(UPLOAD_URL, formData)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => alert("Post request error"));
      };
  
    return (
      <div className="Dyslexia" >
        <form>
            <TextField id="standard-basic" label="First name" value={fname} onChange={(e) => setFName(e.target.value)}/>
            <TextField id="standard-basic" label="Last name" value={lname} onChange={(e) => setLName(e.target.value)}/>
            <TextField id="standard-basic" label="Gender" value={gender} onChange={(e) => setGender(e.target.value)}/>
            <TextField id="standard-basic" label="Native Language" value={nlanguage} onChange={(e) => setNLanguage(e.target.value)}/>
            <TextField id="standard-basic" label="Other Language" value={olanguage} onChange={(e) => setOLanguage(e.target.value)}/>
            <TextField id="standard-basic" label="Age" value={age} onChange={(e) => setAge(e.target.value)}/>
            
            
        <input style={{padding:10}} type="file" onChange={handleFileInput} />
        <Button type="submit" onClick={submitForm} variant="outlined" color="primary">Submit</Button>
        
        </form>
      </div>
    );
}

export default Dyslexia
