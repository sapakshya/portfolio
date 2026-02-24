import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./home/page";
import { About } from "./about/page";
import { Contact } from "./contact/page";
import { Blog } from "./blog/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
