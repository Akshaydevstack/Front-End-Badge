import "./App.css";
import NavBar from "./component/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./Layout/UserLayout";
import Home from "./pages/Home";
import InputPage from "./pages/InputPage";
import ShowInput from "./pages/showInput";
import InputRoute from "./Route/InputRoute";
import ShowMorePage from "./pages/ShowMorePage";
import { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext();

function App() {
  const [data, setData] = useState({});

  return (
    <BrowserRouter>
      <DataContext.Provider value={{data,setData}}>
        <Routes>
          <Route element={<UserLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="InputPage" element={<InputRoute />}>
              <Route index element={<InputPage />}></Route>
              <Route path="showInput" element={<ShowInput />} />
              <Route path="ShowMorePage" element={<ShowMorePage />} />
            </Route>
          </Route>
        </Routes>
      </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
