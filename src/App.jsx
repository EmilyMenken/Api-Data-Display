import './App.css'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Item from './Components/Item.jsx'
import React from "react";
import location from "./location.json";


function App() {
  const[NasaData, setNasaData] = React.useState(null);

  React.useEffect(() => {
      fetch("https://api.nasa.gov/planetary/apod?api_key=Ff7gSdIwxswnGuDgkcCG1b47F09pXhgyqtJU2Etn&count=5")
    .then(res => res.json())
    .then(data => setNasaData(data))
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
