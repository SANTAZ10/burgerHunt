import About from "./components/About";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

export default function Main() {
  return (
    <div className=" w-full h-screen">
      <Navbar />
      <Home />
      <About />
      <Menu/>
    </div>
  );
}
