import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Item from './Components/Item.jsx'
import React from "react";

function App() {
  const[NasaData, setNasaData] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
      fetch("https://api.nasa.gov/planetary/apod?api_key=Ff7gSdIwxswnGuDgkcCG1b47F09pXhgyqtJU2Etn&count=5")
    .then(res => res.json())
    .then(data => setNasaData(data))
  }, [])

  const handleNext = () => {
    setCurrentIndex(prev =>
      prev === NasaData.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex(prev =>
      prev === 0 ? NasaData.length - 1 : prev - 1
    );
  };

  if (NasaData.length === 0) {
    return <p>Loading Images...</p>;
  }

  return (
    <>
      <Header />
      <Item 
        data={NasaData[currentIndex]}
        onNext={handleNext}
        onPrev={handlePrev}
      />
      <Footer />
    </>
  );
}
export default App;
