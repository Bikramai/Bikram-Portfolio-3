import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
  Experience,
  MyExperience,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="pt-[50px] px-[100px]" id="about">

        <About />
        </div>
        <div className="pt-[50px] px-[100px]" id="Portfolio">
          
        <Works  />
        </div>
        {/* <MyExperience /> */}
        <div className="pt-[50px] px-[100px]">

        <Tech />
        </div>
        <div className="relative z-0 mt-[100px] px-[100px] mb-[40px]" id="contact">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
