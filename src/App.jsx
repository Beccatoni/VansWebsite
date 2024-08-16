import { useState } from "react";
import "./App.css";
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Vanlist, { loader as vansLoader } from "./pages/Vans/Vanlist";
import "./mirageServerJs.js";
import Vandetail, { loaderVanDetail } from "./pages/Vans/Vandetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import Hostlayout from "./components/Hostlayout";
import HostVans, { hostVanLoader } from "./pages/Host/HostVans";
import HostVanDetail, {loader as hostVanDetailLoader} from "./pages/Host/HostVanDetail";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanInfo from "./pages/Host/HostVanInfo";
import NotFound from "./pages/NotFound";
import ErrorComp from "./components/ErrorComp";
import Login from "./components/Login";
import { requireAuth } from "./utils.js";
import {loader as loginLoader} from './components/Login.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" loader={loginLoader} element={<Login />} />
      <Route
        path="vans"
        errorElement={<ErrorComp />}
        loader={vansLoader}
        element={<Vanlist />}
      />
      <Route path="vans/:id" loader={loaderVanDetail} element={<Vandetail />} />

      <Route path="host" element={<Hostlayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => {
            await requireAuth()
            return null;
          }}
          errorElement={<ErrorComp />}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => {
            await requireAuth()
            return null;
          }}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => {
            await requireAuth()
            return null;
          }}
        />
        <Route loader={hostVanLoader} path="vans" element={<HostVans />} />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={hostVanDetailLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async () => {
              return null;
            }}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
