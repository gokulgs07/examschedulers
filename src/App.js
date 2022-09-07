import HomePage from "./Pages/HomePage";
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import ExamSchedule1 from "./Pages/ExamSchedule1";
import LandingPage1 from "./Pages/LandingPage1";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route  path="/" element={<HomePage/>} exact> </Route>
    <Route  path="/ExamSchedule1" element={<ExamSchedule1/>} exact> </Route>
    <Route  path="/ExamSchedule1/landingpage1" element={<LandingPage1/>} exact> </Route>
    </Routes>
</BrowserRouter>
  );
}
export default App;
