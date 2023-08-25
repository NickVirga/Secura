import { BrowserRouter, Routes, Route } from "react-router-dom";

import WelcomeScreen from '../src/components/WelcomeScreen/WelcomeScreen';
import Dashboard from '../src/components/Dashboard/Dashboard';
import SocialsPage from "./pages/SocialsPage/SocialsPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<WelcomeScreen />}/>
                <Route path='/dashboard' element={<Dashboard />}/>
                <Route path='/socials' element={<SocialsPage />}/>
            </Routes>
        </BrowserRouter>
        );
    }
    
    export default App;