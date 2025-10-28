import './App.css'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Item from './Components/Item.jsx'
import React from "react";
import location from "./location.json";

function NasaData() {
const[NasaData, setNasaData] = React.useState(null);
React.useEffect(() => {
  fetch("https://sscweb.gsfc.nasa.gov/WS/sscr/2/locations/mms1,mms2/20190101T000000Z,20190101T001000Z/gse,geo/")
.then(res => res.json())
.then(data => console.log(data))
}, [])
};


function App() {
  return (
    <>
      <Header />
      <Item />
      {NasaData}
      <Footer />
    </>
  )
}
export default App;
