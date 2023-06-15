import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./layouts/AppLayout";
// import RentingWithSprentzo from "./pages/protectedPages/HomePage/RentingSprentzo";
// import TrendingNow from "./pages/protectedPages/HomePage/TrendingNow";
import IntegratedComponents from './pages/protectedPages/HomePage/Integrated'

export default function App() {
  return (
    <div className="Main-content" >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IntegratedComponents/>} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

         
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
     
     {/* <RentingWithSprentzo/> */}
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
