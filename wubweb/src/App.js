import "./App.css";
import Home from "./pages/Home";
import EntryPage from "./pages/EntryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import SubmitPage from "./pages/SubmitPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entry/*" element={<EntryPage />} />
          <Route path="/submit" element={<SubmitPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
