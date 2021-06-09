import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import image_compare from './static/Image_compare.png'
import image_count from './static/image_count.png'
import image_compute from './static/image_compute.png'
import image_time from './static/image_time.png'
import image_geo from './static/image_geometry.png'
import { Button } from '@material-ui/core';
import axios from 'axios';
import Result from './Result';


function Dyscalculia() {
    const [resultDyscalculia,setResultDyscalculia] = useState(-1);
    const [result,setResult] = useState("");
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [age,setAge] = useState("")
    const [gender,setGender] = useState("")
    const [comp1, setComp1] = useState("");  
    const [comp2, setComp2] = useState("");
    const [comp3, setComp3] = useState("");
    const [comp4, setComp4] = useState("");
    const [count1,setCount1] = useState("");
    const [count2,setCount2] = useState("");
    const [count3,setCount3] = useState("");
    const [count4,setCount4] = useState("");
    const [compute1,setCompute1] = useState("");
    const [compute2,setCompute2] = useState("");
    const [compute3,setCompute3] = useState("");
    const [compute4,setCompute4] = useState("");
    const [time1,setTime1] = useState("");
    const [time2,setTime2] = useState("");
    const [time3,setTime3] = useState("");
    const [time4,setTime4] = useState("");
    const [geo1,setGeo1] = useState("");
    const [geo2,setGeo2] = useState("");
    const [geo3,setGeo3] = useState("");
    const [geo4,setGeo4] = useState("");
    const [counter,setCounter] = useState(0);
    const submitForm = (e) => {
      e.preventDefault() 
      console.log(setComp2);
      //setSelectedFile(e.target.files[0])
      const formData = new FormData();
      formData.append('age',age)
      formData.append('gender',gender)
      formData.append('comp1',comp1);
      formData.append('comp2',comp2);
      formData.append('comp3',comp3);
      formData.append('comp4',comp4);
      formData.append('count1',count1);
      formData.append('count2',count2);
      formData.append('count3',count3);
      formData.append('count4',count4);
      formData.append('compute1',compute1);
      formData.append('compute2',compute2);
      formData.append('compute3',compute3);
      formData.append('compute4',compute4);
      formData.append('time1',time1);
      formData.append('time2',time2);
      formData.append('time3',time3);
      formData.append('time4',time4);
      formData.append('geo1',geo1);
      formData.append('geo2',geo2);
      formData.append('geo3',geo3);
      formData.append('geo4',geo4);
      //const UPLOAD_URL = "https://flask-capstone-docker.herokuapp.com/api/dyscalculia/upload" 
      const UPLOAD_URL = "http://127.0.0.1:5000/api/dyscalculia/upload"
      axios
          .post(UPLOAD_URL, formData,{ crossDomain: true })
          .then((res) => {
            setResultDyscalculia(0)
            res.data.Status ===0 ? setResult("You Do not have Dyscalculia") : setResult("You have Dyscalculia")
            console.log(res);
          })
          .catch((err) => alert("POST request error"));
    };
    return (
      <div className="Dyscalculia">
        {resultDyscalculia !== -1 ? <Result result={result}/> :
        <form>
          {counter ===0 && <div className="basic" style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <TextField style={{width:400}} id="standard-basic" label="First Name" value={fname} onChange={(e) => setFname(e.target.value)}/>
            <TextField style={{width:400}} id="standard-basic" label="Last Name" value={lname} onChange={(e) => setLname(e.target.value)}/>
            <TextField style={{width:400}} id="standard-basic" label="Age" value={age} onChange={(e) => setAge(e.target.value)}/>
            <TextField style={{width:400,marginBottom:50}} id="standard-basic" label="Gender (Male/Female)" value={gender} onChange={(e) => setGender(e.target.value)}/>
            <div className="Button" style={{display:'flex'}}>
              <Button variant="contained" color="primary" style={{width:100,right:-470}} onClick={()=>setCounter(counter+1)}>Next</Button>
            </div>
          </div>
          }
          {counter === 1 && <div className="compare" style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <img src={image_compare} alt="location invalid"/>
            <TextField style={{width:200,marginTop:30}} id="standard-basic" label="1. " value={comp1} onChange={(e) => setComp1(e.target.value)}/>
            <TextField style={{width:200}} id="standard-basic" label="2. " value={comp2} onChange={(e) => setComp2(e.target.value)}/>
            <TextField style={{width:200}} id="standard-basic" label="3. " value={comp3} onChange={(e) => setComp3(e.target.value)}/>
            <TextField style={{width:200,marginBottom:30}} id="standard-basic" label="4. " value={comp4} onChange={(e) => setComp4(e.target.value)}/>
            <div className="Button" style={{display:'flex'}}>
              <Button variant="contained" color="primary" style={{width:100,right:-570}} onClick={()=>setCounter(counter-1)}>Prev</Button>
              <Button variant="contained" color="primary" style={{width:100,right:-600}} onClick={()=>setCounter(counter+1)}>Next</Button>
            </div>
          </div>}
          {counter === 2 && <div className="counting" style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <img src={image_count} alt="location invalid"/>
            <TextField style={{width:200,marginTop:30}} id="standard-basic" label="1. " value={count1} onChange={(e) => setCount1(e.target.value)}/>
            <TextField style={{width:200}} id="standard-basic" label="2. " value={count2} onChange={(e) => setCount2(e.target.value)}/>
            <TextField style={{width:200}} id="standard-basic" label="3. " value={count3} onChange={(e) => setCount3(e.target.value)}/>
            <TextField style={{width:200,marginBottom:30}} id="standard-basic" label="4. " value={count4} onChange={(e) => setCount4(e.target.value)}/>
            <div className="Button" style={{display:'flex'}}>
              <Button variant="contained" color="primary" style={{width:100,right:-570}} onClick={()=>setCounter(counter-1)}>Prev</Button>
              <Button variant="contained" color="primary" style={{width:100,right:-600}} onClick={()=>setCounter(counter+1)}>Next</Button>
            </div>
          </div>}
          {counter === 3 && <div className="compute" style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <img src={image_compute} alt="location invalid"/>
            <TextField style={{width:200,marginTop:30}} id="standard-basic" label="1. " value={compute1} onChange={(e) => setCompute1(e.target.value)}/>
            <TextField style={{width:200}} id="standard-basic" label="2. " value={compute2} onChange={(e) => setCompute2(e.target.value)}/>
            <TextField style={{width:200}} id="standard-basic" label="3. " value={compute3} onChange={(e) => setCompute3(e.target.value)}/>
            <TextField style={{width:200,marginBottom:30}} id="standard-basic" label="4. " value={compute4} onChange={(e) => setCompute4(e.target.value)}/>
            <div className="Button" style={{display:'flex'}}>
              <Button variant="contained" color="primary" style={{width:100,right:-490}} onClick={()=>setCounter(counter-1)}>Prev</Button>
              <Button variant="contained" color="primary" style={{width:100,right:-520}} onClick={()=>setCounter(counter+1)}>Next</Button>
            </div>
          </div>}
          {counter === 4 && <div className="time" style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <img src={image_time} style={{height:500}} alt="location invalid"/>
            <TextField style={{width:200,marginTop:30}} id="standard-basic" label="1. " value={time1} onChange={(e) => setTime1(e.target.value)}/>
            <TextField style={{width:200}} id="standard-basic" label="2. " value={time2} onChange={(e) => setTime2(e.target.value)}/>
            <TextField style={{width:200}} id="standard-basic" label="3. " value={time3} onChange={(e) => setTime3(e.target.value)}/>
            <TextField style={{width:200,marginBottom:30}} id="standard-basic" label="4. " value={time4} onChange={(e) => setTime4(e.target.value)}/>
            <div className="Button" style={{display:'flex'}}>
              <Button variant="contained" color="primary" style={{width:100,right:-570}} onClick={()=>setCounter(counter-1)}>Prev</Button>
              <Button variant="contained" color="primary" style={{width:100,right:-600}} onClick={()=>setCounter(counter+1)}>Next</Button>
            </div>
          </div>}
          {counter === 5 && <div className="geometry" style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <img src={image_geo} style={{height:500}} alt="location invalid"/>
            <TextField style={{width:200,marginTop:30}} id="standard-basic" label="1. " value={geo1} onChange={(e) => setGeo1(e.target.value)}/>
            <TextField style={{width:200}} id="standard-basic" label="2. " value={geo2} onChange={(e) => setGeo2(e.target.value)}/>
            <TextField style={{width:200}} id="standard-basic" label="3. " value={geo3} onChange={(e) => setGeo3(e.target.value)}/>
            <TextField style={{width:200,marginBottom:30}} id="standard-basic" label="4. " value={geo4} onChange={(e) => setGeo4(e.target.value)}/>
            <div className="Button" style={{display:'flex'}}>
              <Button variant="contained" color="primary" style={{width:100,right:-570}} onClick={()=>setCounter(counter-1)}>Prev</Button>
              <Button variant="contained" color="primary" style={{width:100,right:-600}} onClick={submitForm}>Submit</Button>
            </div>
          </div>}
        </form>
      }
      </div>
    );
}

export default Dyscalculia
