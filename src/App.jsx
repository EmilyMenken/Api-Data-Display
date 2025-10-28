import './App.css'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Item from './Components/Item.jsx'
import React from "react";
import location from "./location.json";


function App() {
  const[NasaData, setNasaData] = React.useState(null);

  React.useEffect(() => {
      fetch("https://sscweb.gsfc.nasa.gov/WS/sscr/2/locations/mms1,mms2/20190101T000000Z,20190101T001000Z/gse,geo?resultFormat=json")
    .then(res => res.json())
    .then(data => {
      let Parser = new DOMParser();
      let xmlDoc = Parser.parserFromString(data, 'text/xml')
      console.log(xmlDoc)
    })
  }, [])



  return (
    <>
      <Header />
      <Item data={NasaData}/>
      <Footer />
    </>
  )
}
export default App;
