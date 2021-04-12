import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import image_compare from './static/Image_compare.png'
import image_count from './static/image_count.png'
import image_time1 from './static/image_time1.png'
import { Button } from '@material-ui/core';

function Dyscalculia() {
    const [comp1, setComp1] = useState("");  
    const [comp2, setComp2] = useState("");
    const [comp3, setComp3] = useState("");
    const [comp4, setComp4] = useState("");
    const [counter,setCounter] = useState(0);
    return (
      <div className="Dyscalculia">
        <form>
          {counter === 0 && <div className="compare" style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <img src={image_compare} alt="Image location invalid"/>
            <TextField style={{width:200}} id="standard-basic" label="1. " value={comp1} onChange={(e) => setComp1(e.target.value)}/>
            <TextField style={{width:200}} id="standard-basic" label="2. " value={comp2} onChange={(e) => setComp2(e.target.value)}/>
            <TextField style={{width:200}} id="standard-basic" label="3. " value={comp3} onChange={(e) => setComp3(e.target.value)}/>
            <TextField style={{width:200}} id="standard-basic" label="4. " value={comp4} onChange={(e) => setComp4(e.target.value)}/>
            <Button variant="contained" color="primary" style={{width:100,right:-570}} onClick={()=>setCounter(counter+1)}>Next</Button>
          </div>}
          {counter === 1 && <div className="counting" style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <img src={image_count} alt="Image location invalid"/>
            <TextField style={{width:200}} id="standard-basic" label="1. " value={comp1} onChange={(e) => setComp1(e.target.value)}/>
            <TextField style={{width:200}} id="standard-basic" label="2. " value={comp2} onChange={(e) => setComp2(e.target.value)}/>
            <TextField style={{width:200}} id="standard-basic" label="3. " value={comp3} onChange={(e) => setComp3(e.target.value)}/>
            <TextField style={{width:200}} id="standard-basic" label="4. " value={comp4} onChange={(e) => setComp4(e.target.value)}/>
            <Button variant="contained" color="primary" style={{width:100,right:-570}} onClick={()=>setCounter(counter+1)}>Next</Button>
          </div>}
          {counter === 2 && <div className="counting" style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <img src={image_count} alt="Image location invalid"/>
            <TextField style={{width:200}} id="standard-basic" label="1. " value={comp1} onChange={(e) => setComp1(e.target.value)}/>
            <TextField style={{width:200}} id="standard-basic" label="2. " value={comp2} onChange={(e) => setComp2(e.target.value)}/>
            <TextField style={{width:200}} id="standard-basic" label="3. " value={comp3} onChange={(e) => setComp3(e.target.value)}/>
            <TextField style={{width:200}} id="standard-basic" label="4. " value={comp4} onChange={(e) => setComp4(e.target.value)}/>
            <Button variant="contained" color="primary" style={{width:100,right:-570}} onClick={()=>setCounter(counter+1)}>Next</Button>
          </div>}
        </form>
      </div>
    );
}

export default Dyscalculia
