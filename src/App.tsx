import { BrowserRouter } from "react-router-dom";
import { StarsCanvas } from "./components/canvas";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from "./components";

function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
      </div>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </BrowserRouter>
    
  )
}

export default App
