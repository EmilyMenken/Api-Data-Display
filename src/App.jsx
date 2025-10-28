import './App.css'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Item from './Components/Item.jsx'
import React from "react";
import location from "./location.json";

function NasaData() {
const[NasaData, setNasaData] = useState(null);
useEffect(() => {
  fetch("https://sscweb.gsfc.nasa.gov/WS/sscr/2/locations")
.then(res => res.json())
.then(data => console.log(data))
setNasaData(data);
})
}, [];


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
