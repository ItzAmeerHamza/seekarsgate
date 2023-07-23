import LandingPage from './Components/LandingPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import OurCourses from './Components/Dashboard/OurCourses'
import SelectedCourse from './Components/Dashboard/SelectedCourse';
import Billing from './Components/Dashboard/Billing';
import MyCourses from './Components/Dashboard/MyCourses';
import VideoTutorials from './Components/Dashboard/VideoTutorials';
import TeachingStaff from './Components/Dashboard/TeachingStaff';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/ourcourses" element={<OurCourses />} />
    <Route path="/selectedcourse" element={<SelectedCourse />} />
    <Route path="/billing" element={<Billing />} />
    <Route path="/mycourses" element={<MyCourses />} />
    <Route path="/videotutorials" element={<VideoTutorials />} />
    <Route path="/teachingStaff" element={<TeachingStaff />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
