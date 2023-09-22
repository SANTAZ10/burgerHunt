import Home from "./components/Home";
import Navbar from "./components/Navbar";

export default function Main() {
  const divStyle = {
    backgroundImage: 'url("/images/home3.jpg")',
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center',
    minHeight: '100vh', 
  };
  return(
    
    <div style={divStyle} className="m-0 w-full h-screen bg-transparent">
    <Navbar/>
    <Home/>
    </div>
  )
}