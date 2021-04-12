import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import './Dyslexia.css'
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Result from './Result';
import { FormLabel } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function Dyslexia() {
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [gender, setGender] = useState("");
    const [nlanguage, setNLanguage] = useState("");
    const [olanguage, setOLanguage] = useState("");
    const [age, setAge] = useState("");
    //const UPLOAD_URL = "http://127.0.0.1:5000/api/dyslexia/upload"
    const UPLOAD_URL = "http://127.0.0.1:5000/api"
    //const UPLOAD_URL = "https://httpbin.org/post" 
    const [selectedFile, setSelectedFile] = useState(null);
    const [resultDyslexia,setResultDyslexia] = useState(-1);
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
        formData.append("gender", gender);
        formData.append("nlanguage", nlanguage);
        formData.append("olanguage", olanguage);
        formData.append("age", age);
        formData.append("file", selectedFile);
        console.log(formData.getAll)
        //console.log(gender);
        axios
          .post(UPLOAD_URL, formData,{ crossDomain: true })
          .then((res) => {
            //console.log(res);
            setResultDyslexia()
            res.data.Status ===0 ? setResult("You Do not have Dyslexia") : setResult("You have Dyslexia")
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
      <div className="Dyslexia" >
        {resultDyslexia !== -1 ? <Result result={result}/> : 
        <form style={{width:400}}>
            <TextField id="standard-basic" label="First name" value={fname} onChange={(e) => setFName(e.target.value)}/>
            <TextField id="standard-basic" label="Last name" value={lname} onChange={(e) => setLName(e.target.value)}/>
            <TextField id="standard-basic" label="Gender (Male/Female)" value={gender} onChange={(e) => setGender(e.target.value)}/>
            <TextField id="standard-basic" label="Can you speak Native Language (Yes/No)" value={nlanguage} onChange={(e) => setNLanguage(e.target.value)}/>
            <TextField id="standard-basic" label="Can you speak any Other Language (Yes/No)" value={olanguage} onChange={(e) => setOLanguage(e.target.value)}/>
            <TextField id="standard-basic" label="Age" value={age} onChange={(e) => setAge(e.target.value)}/>
        <FormLabel style={{margin:20}}>
        <h4>  Please write the following words and upload the picture</h4>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <div>
          <List>
            <ListItem>
            <ListItemText
                        primary="1. bury "
                      />
            </ListItem>
            <ListItem>
            <ListItemText
            
                        primary="2. anxious"
                      />
            </ListItem>
            <ListItem>
            <ListItemText
                        primary="3. cartoon"
                      />
            </ListItem>
            <ListItem>
            <ListItemText
                        primary="4. gentle"
                      />
            </ListItem>
            <ListItem>
            <ListItemText
                        primary="5. cat"
                      />
            </ListItem>
          </List> 
        </div>
        <div>
          <List>
          <ListItem>
            <ListItemText
                        primary="6. hello"
                      />
            </ListItem>
            <ListItem>
            <ListItemText
                        primary="7. diamond"
                      />
            </ListItem>
            <ListItem>
            <ListItemText
                        primary="8. quick"
                      />
            </ListItem>
            <ListItem>
            <ListItemText
                        primary="9. juice"
                      />
            </ListItem>
            <ListItem>
            <ListItemText
                        primary="10. wise"
                      />
            </ListItem>
          </List>
        </div>
        </div>
        <input style={{padding:10}} type="file" onChange={handleFileInput} />
        </FormLabel>
        
        <Button style={{borderColor:'black',fontWeight:'bold'}}type="submit" onClick={submitForm} variant="outlined" color="primary">Submit</Button>
        
        </form> }
      </div>
    );
}

export default Dyslexia
