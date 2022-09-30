import { useState, useEffect } from "react";
import { Header } from './Components/header';
import { Footer } from './Components/footer';
import { Funds } from './Components/funds';
import { Insights } from "./Components/insights";
import { Podcasts } from "./Components/podcasts";
import JsonData from "./data/data.json";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [FasanaraData, LandingPageData] = useState({});
  useEffect(() => {
    LandingPageData(JsonData);
  }, []);
  return (
    <>
    <Header data={FasanaraData.Header}></Header>
     
      <Funds data={FasanaraData.Funds}/>
      <Insights></Insights>
      <Podcasts data={FasanaraData.Podcasts}/>
      <Footer></Footer>
    </>
  );
}

export default App;
