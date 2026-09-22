import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Header from "./components/Header"; 
 import Footer from "./components/Footer"; 
 import Home from "./pages/Home";
  import About from "./pages/About";
export default function App() { 
  return ( 
  <BrowserRouter> 
  <div className="min-h-screen bg-[#f8f9ff] text-[#171827]">
     <Header />

    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>

    <Footer />
  </div>
</BrowserRouter>
);
 }