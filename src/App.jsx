import { useState } from "react";
import "./App.css";
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Vanlist, {laoder as vansLoader} from "./pages/Vans/Vanlist.jsx";
import "./mirageServerJs.js";
import Vandetail from "./pages/Vans/Vandetail.jsx";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Income from "./pages/Host/Income.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import Hostlayout from "./components/Hostlayout.jsx";
import HostVans from "./pages/Host/HostVans.jsx";
import HostVanDetail from "./pages/Host/HostVanDetail.jsx";
import HostVanPricing from "./pages/Host/HostVanPricing.jsx";
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx";
import HostVanInfo from "./pages/Host/HostVanInfo.jsx"
import NotFound from "./pages/NotFound.jsx";
import ErrorComp from "./components/ErrorComp.jsx";

// if (process.env.NODE_ENV === 'development') {
//   // Run development-specific code
//   setupMirageServer();
//   console.log('Development mode');
// } else {
//   // Run production or other environment code
//   console.log('Production mode');
// }
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} >
          <Route path="*" element={<NotFound/>}/>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" errorElement={<ErrorComp/>} loader={vansLoader}  element={<Vanlist />} />
            <Route path="vans/:id" element={<Vandetail />} />

            <Route path="host" element={<Hostlayout />}>
              <Route index element={<Dashboard />}/>
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo/>}/>
              <Route path="pricing" element={<HostVanPricing/>}/>
              <Route path="photos" element={<HostVanPhotos/>}/>
              </Route>
              
            </Route>
          </Route>
))

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
}

export default App;
