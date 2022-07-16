import {
  MissionSection,
  Service,
  HeroSection,
  RoadMapUtility,
  TeamSection,
  FaqSection,
  Footer,
} from "./components";
import "./App.scss";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Loader from './components/Loader/Loader'

function App() {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    Aos.init()
    setTimeout(() => {
      setShowLoader(false);
    }, 5000);
  }, []);

  return (
    <div>
      {showLoader ? (
        <Loader  />
      ) : (
        <>
          <HeroSection />
          <MissionSection />
          <Service />
          <RoadMapUtility />
          <TeamSection />
          <FaqSection />
          <Footer />
          {/* https://codepen.io/ashsaym/pen/wXgvwY */}
        </>
      )}
    </div>
  );
}

export default App;
