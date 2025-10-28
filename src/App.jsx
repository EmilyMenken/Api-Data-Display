import './App.css'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Item from './Components/Item.jsx'
import React from "react";

function NasaData() {
const[NasaData, setNasaData] = React.useState(null);
React.useEffect(function() {
  fetch("https://sscweb.gsfc.nasa.gov/WS/sscr/2/locations")
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
