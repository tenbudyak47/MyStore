import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "@/components/Header";
import Home from "@/pages/Home";
import Footer from "@/components/Footer";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
