import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Páginas
import Home from "./pages/home/home";
import AuthScreen from "./pages/authScreen/authScreen";
import SensorTable from "./pages/sensorTable/SensorTable";
import PageSensor from "./pages/pageSensor/pageSensor";
import MainHeader from "./componets/mainHeader/mainHeader";
import Settings from "./componets/settings/settings";
import PageMap from "./pages/pageMap/pageMap";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<AuthScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sensorTable" element={<SensorTable />} />
        <Route path="/pageSensor" element={<PageSensor />} />
        <Route path="/pageMap" element={<PageMap />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route
          path="*"
          element={
            <div style={{ padding: "32px", textAlign: "center", fontSize: "20px" }}>
              Página não encontrada
            </div>
          }
        />
      </Routes>
    </Router>
    
    </>
   
  );
}

export default App;
