import "./App.css";
import Header from "./components/header";
import NavBar from "./components/navBar";
import HeroSection from "./components/heroSection";
import Testimonials from "./components/testimonials";
import IntelligentComponent from "./components/intelligentComponent";
import Contact from "./components/contact";
import Subscribe from "./components/subscribe";
import SliderComponent from "./components/sliderComponent";
// import Averlo from "./components/averlo";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <HeroSection />
      <Testimonials />
      <IntelligentComponent />
      <SliderComponent />
      <Contact />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
