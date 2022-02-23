import {Route, Routes} from "react-router-dom";
import Layout from "./UI/Layout/Layout";
import FormPage from "./pages/FormPage/FormPage";
import CalendarPage from "./pages/CalendarPage/CalendarPage";

function App() {
  return (
      <Routes>
              <Route path="/" element={<Layout><FormPage /></Layout>}/>
              <Route path="/form" element={<Layout><FormPage /></Layout>}/>
              <Route path="/calendar" element={<Layout><CalendarPage /></Layout>}/>
      </Routes>

  );
}

export default App;
