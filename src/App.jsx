import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState,useEffect } from "react";
import axios from "axios";
function App() {

 
  const [formdata,setformdata]=useState({
     
    "name":"",
    "ownerName":"",
    "address":"",
    "areaCode":"",
    "rent":"",

  })

  
 const handleChange=(e)=>{

    setformdata({...formdata,[e.target.className]:e.target.value})
 
 }
 
 
 const tenant=(e)=>{

const valu=e.target.checked;

setformdata({...formdata,[e.target.className]:valu})


 }
 const senditoheaven=()=>{


  axios.post('http://localhost:8080/houses', formdata)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  
  
          }



  
  return (
    <div className="App">
      
      <button className="toggleForm">
        
      </button>
      <AddHouse tenant={tenant} handleChange={handleChange} senditoheaven={senditoheaven}/>

      {<Rentals  />}

      <br />
     )
    </div>
  );
}

export default App;
