import Login from "./app/auth/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./app/features/dashboard/Dashboard";
import AppLayout from "./common/layout/AppLayout";
import Monitoring from "./app/features/monitoring/Monitoring";
import Services from "./app/features/services/Services";
import AboutUs from "./app/features/about-us/AboutUs";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route element={<AppLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="monitoring" element={<Monitoring />} />
          <Route path="service" element={<Services />} />
          <Route path="about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
