import WelcomeScreen from '../src/components/WelcomeScreen/WelcomeScreen';
import Dashboard from '../src/components/Dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<WelcomeScreen />}/>
                <Route path='/dashboard' element={<Dashboard />}/>
            </Routes>
        </BrowserRouter>
        );
    }
    
    export default App;