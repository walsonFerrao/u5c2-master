import { useEffect, useState } from "react";
import "./Rentals.css";
import axios from "axios";
export const Rentals = (props) => {

  const [aaa,setaa]=useState([])
const [data,setdata]=useState(aaa)


  useEffect(()=>{
  
  
    axios.get('http://localhost:8080/houses')
    .then(function (response) {
      
      console.log(response.data);
      setaa(response.data)
    setdata(aaa)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  
  
  
  },[])
  
  const sortbyid=()=>{
  
  const newarr=data.sort((a,b)=> b.id-a.id)
  data(newarr)
  console.log(newarr)
  }




  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById"  onClick={sortbyid}>Sort by ID</button>
        <button className="sortByRentAsc">Rent Low to high</button>
        <button className="sortByRentDesc">Rent High to low</button>
        <button className="sortByAreaAsc">Area Low to high</button>
        <button className="sortByAreaDesc">Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
