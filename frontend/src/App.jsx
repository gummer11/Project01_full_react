import React from "react";
import { Route, Routes, useNavigate } from "react-router";

import NotePage from "./pages/NotesREACT/Note";
import HomePage from "./pages/HomePage";
import NavbarPage from "./pages/NavbarPage";
import IcodePage from "./pages/IcodePage";
import CreatePage from "./pages/NotesREACT/CreatePage";
import JsPage from "./pages/JsPage";
import ApiPage from "./pages/ApiPage";
import AnimacioPage from "./pages/AnimacioPage";
import FooterPage from "./pages/FooterPage";
import HmenuPage from "./pages/HmenuPage";
import DropdmPage from "./pages/DropdmPage";
import SliderPage from "./pages/SliderPage";
import NoteDetailPage from "./pages/NotesREACT/NoteDetailPage";
import { Link } from "react-router";
import toast from "react-hot-toast";
//http://localhost:5173/pages/home.html
//github https://www.youtube.com/watch?v=i_23KUAEtUM
const App = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bb" element={<NotePage />} />
        <Route path="/np" element={<NavbarPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
        <Route path="/ip" element={<IcodePage />} />
        <Route path="/jp" element={<JsPage />} />
        <Route path="/ap" element={<ApiPage />} />
        <Route path="/animp" element={<AnimacioPage />} />
        <Route path="/fp" element={<FooterPage />} />
        <Route path="/hp" element={<HmenuPage />} />
        <Route path="/dp" element={<DropdmPage />} />
        <Route path="/sp" element={<SliderPage />} />
      </Routes>
    </div>
  );
};

export default App;
