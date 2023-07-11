import LandingPage from './Components/LandingPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Dashboard/Home'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/dashboardhome" element={<Home />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
