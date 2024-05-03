import "@/assets/css/style.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import useStore from "@/store";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import DashPage from "@/templates/Dashboard/DashPage";
import DocsPage from "@/templates/Documents/DocsPage";

function App() {
  return (
    <div>
      <div className="page-flex">
        <Sidebar />
        <div className="main-wrapper">
          <Navbar />

          <Router>
            <Routes>
              <Route path="/" element={<DashPage />} />
              <Route path="/dashboard" element={<DashPage />} />
              <Route path="/documents" element={<DocsPage />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </Router>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
