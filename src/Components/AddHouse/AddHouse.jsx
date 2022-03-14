import { useState } from "react"

import axios from 'axios'



export const AddHouse = () => {
 
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
 
  return (






    <div className="addHouseContainer">
      <form>
        <label>name</label>
        <input type="text" className="name"  required  onChange={handleChange} />
        <br />
        <label>ownerName</label>
        <input  type="text" className="ownerName" required    onChange={handleChange}/>
        <br />
        <label>address</label>
        <input  type="text" className="address" required    onChange={handleChange}/>
        <br />
        <label>areaCode</label>
        <input  type="text" className="areaCode" required   onChange={handleChange}/>
        <br />
        <label>rent</label>
        <input  type="text" className="rent" required     onChange={handleChange}/>
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input  type="checkbox" className="bachelor" onChange={tenant} />
        <br />
        <label>married</label>
        <input  type="checkbox" className="married" onChange={tenant} />
        <br />
        <label>image</label>
        <input  type="text" className="image" required />
        <br />
        <input className="submitBtn" type="submit"  onClick={()=>{


axios.post('http://localhost:8080/houses', formdata)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});


        }} />
      </form>
    </div>
  );
};
