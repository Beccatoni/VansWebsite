import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Vanlist from "./pages/Vans/Vanlist.jsx";
import "./mirageServerJs.js";
import Vandetail from "./pages/Vans/Vandetail.jsx";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Income from "./pages/Host/Income.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import Hostlayout from "./components/Hostlayout.jsx";
import HostVans from "./pages/Host/HostVans.jsx";
import HostVanDetail from "./pages/Host/HostVanDetail.jsx";

// if (process.env.NODE_ENV === 'development') {
//   // Run development-specific code
//   setupMirageServer();
//   console.log('Development mode');
// } else {
//   // Run production or other environment code
//   console.log('Production mode');
// }

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vanlist />} />
            <Route path="vans/:id" element={<Vandetail />} />

            <Route path="host" element={<Hostlayout />}>
              <Route index element={<Dashboard />}/>
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
