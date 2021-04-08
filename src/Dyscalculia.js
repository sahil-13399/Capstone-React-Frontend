import React,{useState} from 'react'
import FileUploader from './FileUploader';
function Dyscalculia() {
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    return (
      <div className="App">
        <form>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
  
         <FileUploader
          onFileSelectSuccess={(file) => setSelectedFile(file)}
          onFileSelectError={({ error }) => alert(error)}
        />
        {console.log(selectedFile)}
        </form>
      </div>
    );
}

export default Dyscalculia
