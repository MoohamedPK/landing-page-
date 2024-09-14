import "./App.css";
import Header from "./components/NavBar/Header";
import Hero from "./components/Hero/Hero";
import Features from './components/Features/Features';
import Workflow from "./components/workflow/Workflow";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from './components/footer/Footer'

// import UseReducer from './components/UseReducer/UseReducer';

function App() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Features />
        <Workflow />
        <Pricing />
        <Testimonials />
        <hr className="border-neutral-600"></hr>
        <Footer/>
      </div>
    </>
  );
}

export default App;
