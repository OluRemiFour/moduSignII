import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "./components/NavBar";
import SignLanguageTranslator from "./components/SignLanguageTranslator";

function App() {
  return (
    <>
      <div className="max-width-7xl mx-auto bg-[url('src/assets/images/background.png')] h-fit">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="machine" element={<SignLanguageTranslator />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
