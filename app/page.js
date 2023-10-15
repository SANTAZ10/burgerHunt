import About from "./components/About";
import Chefs from "./components/Chefs";
import Course from "./components/Course";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Ingredients from "./components/Ingredients";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";

export default function Main() {
  return (
    <div className=" w-full h-screen">
      <Navbar />
      <Home />
      <About />
      <Menu/>
      <Course/>
      <Ingredients/>
      <Chefs/>
      <Reviews/>
      <Footer/>
    </div>
  );
}
