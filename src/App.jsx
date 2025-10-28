import './App.css'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Item from './Components/Item.jsx'
import React, {useEffect} from "react";

function NasaData() {
const[NasaLocationData, setNasaLocationData] = React.useState(null);
React.useEffect(function() {
  fetch("https://sscweb.gsfc.nasa.gov/WebServices/REST/json/themisa")
.then(res => res.json())
.then(data => console.log(data))
setNasaLocationData(data);
});


function App() {
  return (
    <>
      <Header />
      <Item />
      <Footer />
    </>
  )
}

}
export default NasaData;
