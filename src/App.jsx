import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState,useEffect } from "react";
import axios from "axios";
function App() {

  const [aaa,setaa]=useState([])
  useEffect(()=>{
  
  
    axios.get('http://localhost:8080/houses')
    .then(function (response) {
      
      console.log(response.data);
      setaa(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  
  
  
  },[])
  
  const sortbyid=()=>{
  
  const newarr=aaa.sort((a,b)=> b.id-a.id)
  setaa(newarr)
  console.log(newarr)
  }



  
  return (
    <div className="App">
      <button className="toggleForm">
        <AddHouse/>
        {/* Show text Add House or Show Rentals based on state */}
      </button>
      {/* Show component based on state */}

      <br />
     <Rentals aaa={aaa} />)
    </div>
  );
}

export default App;
