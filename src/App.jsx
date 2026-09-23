import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Header from "./components/Header.jsx"; 
 import Footer from "./components/Footer.jsx"; 
 import Home from "./pages/Home.jsx";
  import About from "./pages/About.jsx";
  import Feature from "./pages/feature/Feature";
import WorkPortfolioPage from "./pages/work/WorkPortfolioPage.jsx";
import CaseStudyPage from "./pages/case/CaseStudyPage.jsx";
import BlogPage from "./pages/blog/BlogPage.jsx";
import BlogArticlePage from "./pages/read/BlogArticlePage.jsx";


export default function App() { 
  return ( 
  <BrowserRouter> 
  <div className="min-h-screen bg-[#f8f9ff] text-[#171827]">
     <Header />

    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Feature" element={<Feature />} />
        <Route path="/WorkPortfolioPage" element={<WorkPortfolioPage />} />
        <Route path="/CaseStudyPage" element={<CaseStudyPage />} />
        <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/BlogArticlePage" element={<BlogArticlePage />} />
      </Routes>
    </main>

    <Footer />
  </div>
</BrowserRouter>
);
 }