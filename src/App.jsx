import Appli from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import {Routes, Route} from "react-router-dom"
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
function App() {
  return (
   
    <>
    <Appli/>
    <Routes>
        <Route index path = "/" element={<Hero></Hero>} />
        <Route path = "contact" element={<Contact></Contact>} />
        <Route path = "reviews" element={<Reviews></Reviews>} />
      </Routes>
      <Footer/>
    </>
    
    
  );
}

export default App;
