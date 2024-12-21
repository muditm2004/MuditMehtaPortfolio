import { useState } from "react";
import Header from "./assets/Components/Header";
import MyContext from "./assets/Context/MyContext";
import Content from "./assets/Components/Content";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardPage from "./assets/Components/CardPage";

function App() {
  return (
    <>
      <Router>
        <MyContext>
          {/* <Header /> */}

          <Routes>
            <Route path="/" element={<Content page="home" />} />
            <Route
              path="/devprojects"
              element={<Content page="devprojects" />}
            />
            <Route
              path="/desprojects"
              element={<Content page="desprojects" />}
            />
            <Route path="/skills" element={<Content page="skills" />} />
            <Route path="/desprojects/:id" element={<CardPage />} />
            <Route path="/devprojects/:id" element={<CardPage />} />
          </Routes>

          {/* <Content/> */}
        </MyContext>
      </Router>
    </>
  );
}

export default App;
