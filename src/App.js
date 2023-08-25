import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';

import SocialsPage from "./pages/SocialsPage/SocialsPage";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<SocialsPage />} />
        {/* <Route path="/" element={<T />} /> */}
        {/* <Route path="/" element={<T />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
