import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
import LandingPage from "./pages/LandingPage";
import InputRoute from "./Routes/InputRoute";
import ShowInputPage from "./pages/ShowInputPage";
import InputPage from "./pages/InputPage";
import { createContext, useState } from "react";
export const DateContext = createContext();

function App() {
  const [data, setData] = useState({});
  return (
    <BrowserRouter>
      <DateContext.Provider value={{ data, setData }}>
        <Routes>
          <Route element={<UserLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="Inputpage" element={<InputRoute />}>
              <Route index element={<InputPage />} />
              <Route path="ShowInputPage" element={<ShowInputPage />} />
            </Route>
          </Route>
        </Routes>
      </DateContext.Provider>
    </BrowserRouter>
  );
}

export default App;
