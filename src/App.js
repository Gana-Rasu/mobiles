
import './App.css';
import React, {useEffect, useState } from 'react';

const API = `http://localhost:4000`

function App() {

  // array of json objects to display the component
  // const mobiles = [
  //   {
  //     model: "OnePlus 9 5G",
  //     img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
  //     company: "Oneplus"
  //   },
  //   {
  //     model: "Iphone 13 mini",
  //     img:
  //       "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
  //     company: "Apple"
  //   },
  //   {
  //     model: "Samsung s21 ultra",
  //     img: "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
  //     company: "Samsung"
  //   },
  //   {
  //     model: "Xiomi mi 11",
  //     img: "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
  //     company: "Xiomi"
  //   }
  // ];

  const [mobiles,setMobiles] = useState([])

  // useeffect is used to protect the fetch from running everytime the component is rendered
  useEffect(()=>{
fetch(`${API}/mobiles`)
.then((response) => response.json())
  .then((mobiles) => setMobiles(mobiles))
  },[])
  // empty dependancy array to call the fetch only once
  
  return (
    // looping the phone component with the data of arrays to create multiples copies without any change 
    // just by using the props technique

    <div className="App">
      <div className="phone-list-container">
      {mobiles.map((mobile)=>(
  <Phone key={mobile._id} mobiles={mobile} /> 
     ))}
      </div>
    </div>
  );
}

export default App;

function Phone({mobiles}){
  // component for the ui
  return(
    <>
    <div className="phone-container">
    <img className="phone-picture" src={mobiles.img} alt="phone" />
    <p className="phone-company">{mobiles.company}</p>
    <p className="phone-name">{mobiles.model}</p>
    </div>
    </>
  )
}
